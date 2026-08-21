const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString(`base64`);
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10`; // short_term = 4 weeks / medium_term = 6 months / long_term = many years
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=3`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=10`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const ENV_HINT = `Update SPOTIFY_REFRESH_TOKEN in .env and in the Vercel project settings.`;
const REAUTH_HINT = `Run \`npm run spotify:auth\`, then update SPOTIFY_REFRESH_TOKEN in .env and in the Vercel project settings.`;

// Thrown when the problem is the credentials rather than the request, so callers can
// tell "Spotify needs re-authorizing" apart from "Spotify is having a bad day".
export class SpotifyAuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SpotifyAuthError";
  }
}

export type Track = {
  name: string;
  artists: string[];
};

export type NowPlayingResult =
  | { state: "current"; isPlaying: boolean; track: Track }
  | { state: "recent"; isPlaying: false; track: Track }
  | { state: "idle" }
  | { state: "error"; message: string };

// What the browser is allowed to see. The internal error message names env vars and
// remediation steps, which belong in the server log rather than in a public response.
export type PublicNowPlaying = Exclude<NowPlayingResult, { state: "error" }> | { state: "error" };

export const toPublicNowPlaying = (result: NowPlayingResult): PublicNowPlaying =>
  result.state === "error" ? { state: "error" } : result;

const getAccessToken = async (): Promise<string> => {
  if (!client_id || !client_secret || !refresh_token) {
    throw new SpotifyAuthError(
      `Missing Spotify credentials. SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET and SPOTIFY_REFRESH_TOKEN must all be set.`
    );
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: `POST`,
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": `application/x-www-form-urlencoded`,
    },
    body: new URLSearchParams({
      grant_type: `refresh_token`,
      refresh_token,
    }),
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    // Since July 2026 refresh tokens expire six months after the original
    // authorization, measured from that authorization rather than the last refresh.
    // Spotify reports both expiry and revocation as a 400 invalid_grant.
    if (body.error === `invalid_grant`) {
      throw new SpotifyAuthError(
        `Spotify refresh token is no longer valid (${body.error_description ?? `invalid_grant`}). ${REAUTH_HINT}`
      );
    }

    throw new SpotifyAuthError(
      `Spotify token request failed: ${response.status} ${body.error ?? response.statusText}`
    );
  }

  if (!body.access_token) {
    throw new SpotifyAuthError(`Spotify token response did not include an access_token.`);
  }

  // Spotify sometimes hands back a rotated refresh token, and the existing one is only
  // safe to keep using when none is returned. Nothing here can write to the environment,
  // so say so loudly rather than letting the stored token quietly go stale. The value
  // itself is deliberately not logged.
  if (body.refresh_token && body.refresh_token !== refresh_token) {
    console.warn(`[spotify] Spotify issued a rotated refresh token. ${ENV_HINT}`);
  }

  return body.access_token;
};

const fetchJson = async (url: string, access_token: string, label: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Spotify request for ${label} failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

// Podcast episodes carry a `show` where tracks carry `artists`, and either can come
// back as null, so normalise before the UI reaches for `artists[0]`.
const toTrack = (item: any): Track | null => {
  if (!item?.name) return null;

  const artists: string[] = Array.isArray(item.artists)
    ? item.artists.map((artist: any) => artist?.name).filter(Boolean)
    : item.show?.name
      ? [item.show.name]
      : [];

  if (!artists.length) return null;

  return { name: item.name, artists };
};

const describeError = (error: unknown) => (error instanceof Error ? error.message : String(error));

export const getSpotifyData = async () => {
  try {
    const access_token = await getAccessToken();

    const [artists, tracks, recently] = await Promise.all([
      fetchJson(TOP_ARTISTS_ENDPOINT, access_token, `top artists`),
      fetchJson(TOP_TRACKS_ENDPOINT, access_token, `top tracks`),
      fetchJson(RECENTLY_PLAYED_ENDPOINT, access_token, `recently played`),
    ]);

    return { ok: true as const, artists, tracks, recently };
  } catch (error) {
    console.error(`[spotify] Could not load music page data:`, error);

    return {
      ok: false as const,
      needsReauth: error instanceof SpotifyAuthError,
      error: describeError(error),
    };
  }
};

// If I'm currently playing something, return that. Otherwise, return the most recently played track.
export const getMostRecentlyPlayed = async (): Promise<NowPlayingResult> => {
  try {
    const access_token = await getAccessToken();

    const nowPlaying = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // 204 means authenticated but nothing is playing. Any other non-2xx is a real
    // failure and must not be quietly treated as "not listening to anything".
    if (nowPlaying.status !== 204 && !nowPlaying.ok) {
      throw new Error(`Spotify request for now playing failed: ${nowPlaying.status} ${nowPlaying.statusText}`);
    }

    if (nowPlaying.ok) {
      const body = await nowPlaying.json().catch(() => null);
      const track = toTrack(body?.item);

      // A paused player still reports 200, with is_playing false.
      if (track) {
        return { state: `current`, isPlaying: Boolean(body?.is_playing), track };
      }
    }

    const recentlyPlayed = await fetchJson(RECENTLY_PLAYED_ENDPOINT, access_token, `recently played`);
    const track = toTrack(recentlyPlayed?.items?.[0]?.track);

    if (!track) return { state: `idle` };

    return { state: `recent`, isPlaying: false, track };
  } catch (error) {
    console.error(`[spotify] Could not load now playing:`, error);

    return { state: `error`, message: describeError(error) };
  }
};

import querystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString(`base64`);
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10`; // short_term = 4 weeks / medium_term = 6 months / long_term = many years
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=3`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=10`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: `POST`,
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": `application/x-www-form-urlencoded`,
    },
    body: querystring.stringify({
      grant_type: `refresh_token`,
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getSpotifyData = async () => {
  const { access_token } = await getAccessToken();

  const responseTracks = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const responseArtists = await fetch(TOP_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const responseRecently = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return { responseArtists, responseRecently, responseTracks };
};

// If I'm currently playing something, return that. Otherwise, return the most recently played track.
export const getMostRecentlyPlayed = async () => {
  try {
    const { access_token } = await getAccessToken();

    const nowPlaying = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (nowPlaying.status !== 200) {
      const recentlyPlayed = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (!recentlyPlayed.ok) {
        throw new Error(`Error fetching recently played: ${recentlyPlayed.status}`);
      }

      const mostRecentTrack = await recentlyPlayed.json();
      return {
        currentlyPlaying: false,
        type: "recent",
        item: mostRecentTrack.items[0],
      };
    }

    if (!nowPlaying.ok) {
      throw new Error(`Error fetching now playing: ${nowPlaying.status}`);
    }

    const nowPlayingResponse = await nowPlaying.json();

    return {
      isPlaying: nowPlayingResponse.is_playing,
      type: "current",
      item: { track: nowPlayingResponse.item },
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

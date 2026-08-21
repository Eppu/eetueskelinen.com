/**
 * Mints a fresh SPOTIFY_REFRESH_TOKEN by walking through the Authorization Code flow.
 *
 * Needed roughly every six months: since July 2026 Spotify expires refresh tokens six
 * months after the original authorization, and the clock is not reset by refreshing.
 * https://developer.spotify.com/blog/2026-06-18-refresh-token-expiration
 *
 *   npm run spotify:auth
 *
 * The redirect URI printed on startup must be registered under "Redirect URIs" in the
 * app's settings at https://developer.spotify.com/dashboard. Spotify does not accept
 * `localhost` — loopback redirects have to use the 127.0.0.1 literal.
 */

import "dotenv/config";
import { createServer } from "node:http";
import { randomBytes } from "node:crypto";
import { spawn } from "node:child_process";

const PORT = Number(process.env.SPOTIFY_AUTH_PORT ?? 8888);
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`;
const SCOPES = ["user-read-currently-playing", "user-read-recently-played", "user-top-read"];

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

if (!client_id || !client_secret) {
  console.error("Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET in .env — both are needed to re-authorize.");
  process.exit(1);
}

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const state = randomBytes(16).toString("hex");

const authorizeUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
  client_id,
  response_type: "code",
  redirect_uri: REDIRECT_URI,
  scope: SCOPES.join(" "),
  state,
  show_dialog: "true",
})}`;

const exchangeCodeForTokens = async (code) => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(`Token exchange failed: ${response.status} ${body.error ?? response.statusText}` +
      (body.error_description ? ` — ${body.error_description}` : ""));
  }

  if (!body.refresh_token) {
    throw new Error("Spotify did not return a refresh_token. Make sure you are using the Authorization Code flow.");
  }

  return body;
};

const respond = (res, status, message) => {
  res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(message);
};

const openInBrowser = (url) => {
  const opener = process.platform === "darwin" ? "open" : process.platform === "win32" ? "start" : "xdg-open";

  try {
    // Detached and ignored so a missing opener never takes the script down with it.
    spawn(opener, [url], { stdio: "ignore", detached: true, shell: process.platform === "win32" }).unref();
  } catch {
    // Falling back to the printed URL is fine.
  }
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);

  if (url.pathname !== "/callback") {
    return respond(res, 404, "Not found");
  }

  const error = url.searchParams.get("error");
  if (error) {
    respond(res, 400, `Authorization failed: ${error}. You can close this tab.`);
    console.error(`\nAuthorization was denied or failed: ${error}`);
    server.close();
    process.exitCode = 1;
    return;
  }

  if (url.searchParams.get("state") !== state) {
    respond(res, 400, "State mismatch — ignoring this callback.");
    console.error("\nState parameter did not match. Aborting rather than trusting the response.");
    server.close();
    process.exitCode = 1;
    return;
  }

  const code = url.searchParams.get("code");
  if (!code) {
    return respond(res, 400, "No authorization code in the callback.");
  }

  try {
    const tokens = await exchangeCodeForTokens(code);

    respond(res, 200, "Authorized. The refresh token has been printed in your terminal — you can close this tab.");

    console.log("\nSuccess. Your new refresh token:\n");
    console.log(`SPOTIFY_REFRESH_TOKEN=${tokens.refresh_token}\n`);
    console.log(`Granted scopes: ${tokens.scope ?? "(none reported)"}`);
    console.log("\nNext steps:");
    console.log("  1. Replace SPOTIFY_REFRESH_TOKEN in .env with the line above.");
    console.log("  2. Update the same variable in the Vercel project settings, then redeploy.");
    console.log("\nTreat it like a password, and expect to repeat this in about six months.");
  } catch (err) {
    respond(res, 500, "Token exchange failed. Check your terminal for details.");
    console.error(`\n${err.message}`);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Free it, or pick another with SPOTIFY_AUTH_PORT=1234 npm run spotify:auth`);
    console.error("If you change the port, register the matching redirect URI in the Spotify dashboard too.");
  } else {
    console.error(err.message);
  }
  process.exitCode = 1;
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Redirect URI in use: ${REDIRECT_URI}`);
  console.log("This exact value must be registered in your app's settings at https://developer.spotify.com/dashboard\n");
  console.log("Opening Spotify's authorization page. If it doesn't open, visit:\n");
  console.log(`${authorizeUrl}\n`);
  console.log("Waiting for the callback...");
  openInBrowser(authorizeUrl);
});

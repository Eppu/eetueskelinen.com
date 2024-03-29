import { getSpotifyData } from "../../utils/spotify";

async function handler(req, res) {
  if (req.method === `GET`) {
    try {
      const { responseTracks, responseArtists, responseRecently } = await getSpotifyData();

      if (responseRecently.status !== 200) {
        return res.status(responseRecently.status).json({ error: `there was an error` });
      }

      if (responseArtists.status !== 200) {
        return res.status(responseArtists.status).json({ error: `there was an error` });
      }
      if (responseTracks.status !== 200) {
        return res.status(responseTracks.status).json({ error: `there was an error` });
      }

      const artists = await responseArtists.json();
      const songs = await responseTracks.json();
      const recentlyPlayed = await responseRecently.json();

      return res.status(200).json({ artists, songs, recentlyPlayed });
    } catch (e) {
      if (e.response.status === 429) {
        return res.status(429).json({ message: `you need to wait ${e.headers[`Retry-After`]}` });
      }
      if (e.response.status === 401) {
        return res.status(401).json({ message: "Error occured", code: e.response.status });
      }
      return res.status(500).json({ message: `there was an error`, code: e.response.status });
    }
  } else {
    return res.status(405).json({ error: `Method not allowed` });
  }
}

export default handler;

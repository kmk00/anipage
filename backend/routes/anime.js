import express from "express";
import { getAnime } from "../queries/anime.js";

const animeRouter = express();

animeRouter.get("/", async (req, res) => {
  return res.json({ hello: "world" });
});

animeRouter.get("/:animeId", async (req, res) => {
  const animeId = req.params.animeId;
  const anime = await getAnime(animeId);

  if (!anime) {
    return res.status(400).json({ error: "Anime not found" });
  }

  return res.json(anime);
});

export default animeRouter;

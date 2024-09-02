import express from "express";
import groupByLetter from "../utils/groupByLetter.js";
import {
  checkIfStudioExists,
  getProductionsByStudio,
  getStudiosDistinct,
} from "../queries/studio.js";
import multipleStudiosComaSeparation from "../utils/multipleStudiosComaSeparation.js";

const studiosRouter = express();

studiosRouter.get("/", async (req, res) => {
  //Get studios from database, order alphabetically and group by letter
  const studios = await getStudiosDistinct();
  const studiosArray = multipleStudiosComaSeparation(studios);
  studiosArray.sort();

  const groupedStudios = groupByLetter(studiosArray);

  return res.json(groupedStudios);
});

studiosRouter.get("/:studioName", async (req, res) => {
  const studioName = req.params.studioName;

  const studioExists = await checkIfStudioExists(studioName);
  if (!studioExists) {
    console.log("Studio not found");
    return res.status(400).json({ error: "Studio not found" });
  }

  const productions = await getProductionsByStudio(studioName);

  if (productions.length === 0) {
    return res.status(400);
  }

  return res.json(productions);
});

export default studiosRouter;

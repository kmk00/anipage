import express from "express";
import groupByLetter from "../utils/groupByLetter.js";
import { getStudiosDistinct } from "../queries/studio.js";
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

export default studiosRouter;

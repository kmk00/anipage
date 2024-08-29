import express from "express";
import groupByLetter from "./utils/groupByLetter.js";
import { getStudiosDistinct } from "./queries/studio.js";
import multipleStudiosComaSeparation from "./utils/multipleStudiosComaSeparation.js";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  return res.json({ hello: "world" });
});

app.get("/studios", async (req, res) => {
  const studios = await getStudiosDistinct();
  const studiosArray = multipleStudiosComaSeparation(studios);
  studiosArray.sort();

  const groupedStudios = groupByLetter(studiosArray);

  return res.json(groupedStudios);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

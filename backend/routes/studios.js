import express from "express";

const studiosRouter = express();

studiosRouter.get("/studios", async (req, res) => {
  const studios = await getStudiosDistinct();
  const studiosArray = multipleStudiosComaSeparation(studios);
  studiosArray.sort();

  const groupedStudios = groupByLetter(studiosArray);

  return res.json(groupedStudios);
});

export default studiosRouter;

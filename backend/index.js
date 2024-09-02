import express from "express";
import studiosRouter from "./routes/studios.js";
import animeRouter from "./routes/anime.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", async (req, res) => {
  return res.json({ hello: "world" });
});

app.use("/studios", studiosRouter);
app.use("/anime", animeRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

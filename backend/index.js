import express from "express";
import studiosRouter from "./routes/studios.js";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  return res.json({ hello: "world" });
});

app.use("/studios", studiosRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

import express from "express";
import { Sequelize, DataTypes, Model } from "sequelize";

const app = express();
const port = 3000;

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const Anime = sequelize.define("animes", {
  anime_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  English_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  Other_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  Score: {
    type: DataTypes.REAL,
    allowNull: false,
  },

  Genres: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  Synopsis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  Type: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  Episodes: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  Rating: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  Rank: {
    type: DataTypes.REAL,
    allowNull: false,
  },

  Popularity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  Favorites: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  Scored_by: {
    type: DataTypes.REAL,
    allowNull: false,
  },

  Members: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  Image_URL: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

sequelize.sync();

app.get("/", async (req, res) => {
  const studios = await Anime.sequelize.query("SELECT * FROM animes LIMIT 10;");
  return res.json(studios);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

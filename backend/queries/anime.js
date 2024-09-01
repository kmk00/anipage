import { DataTypes, Op } from "sequelize";
import sequelize from "./sequelize.js";

export const Anime = sequelize.define(
  "animes",
  {
    anime_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.TEXT,
    },
    English_name: {
      type: DataTypes.TEXT,
    },
    Other_name: {
      type: DataTypes.TEXT,
    },
    Score: {
      type: DataTypes.DECIMAL,
    },
    Genres: {
      type: DataTypes.TEXT,
    },
    Synopsis: {
      type: DataTypes.TEXT,
    },
    Type: {
      type: DataTypes.TEXT,
    },
    Episodes: {
      type: DataTypes.DECIMAL,
    },
    Aired: {
      type: DataTypes.TEXT,
    },
    Status: {
      type: DataTypes.TEXT,
    },
    Studios: {
      type: DataTypes.TEXT,
    },
    Source: {
      type: DataTypes.TEXT,
    },
    Rating: {
      type: DataTypes.TEXT,
    },
    Image_URL: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

sequelize.sync();

/**
 * Gets an anime from the database by its id.
 *
 * @param {number} anime_id ID of the anime to search for.
 *
 * @returns {Promise<Anime | null>} Promise that resolves to the anime if it exists,
 *   or null if it doesn't.
 */
export const getAnime = async (anime_id) => {
  return await Anime.findOne({
    attributes: [
      "anime_id",
      "Name",
      "English_name",
      "Image_URL",
      "Other_name",
      "Score",
      "Genres",
      "Synopsis",
      "Type",
      "Episodes",
      "Aired",
      "Status",
      "Studios",
      "Source",
      "Rating",
    ],
    where: {
      anime_id: anime_id,
    },
  });
};

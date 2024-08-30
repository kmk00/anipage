import { DataTypes, Op } from "sequelize";
import sequelize from "./sequelize.js";

export const Studio = sequelize.define(
  "animes",
  {
    anime_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    Studios: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    Name: {
      type: DataTypes.TEXT,
    },

    Englsh_name: {
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
 * Gets all distinct studios from the database.
 *
 * @returns {Promise<Studio[]>} Promise that resolves to an array of distinct studio objects.
 */
export const getStudiosDistinct = async () => {
  return await Studio.findAll({
    attributes: [
      [sequelize.fn("DISTINCT", sequelize.col("Studios")), "Studios"],
    ],
  });
};

/**
 * Gets all productions by a studio from the database.
 *
 * @param {string} studio Name of the studio to search for.
 *
 * @returns {Promise<Studio[]>} Promise that resolves to an array of studio objects
 *   with only the "anime_id" attribute.
 */
export const getProductionsByStudio = async (studio) => {
  return await Studio.findAll({
    attributes: ["anime_id", "Name", "English_name", "Image_URL"],
    where: {
      Studios: {
        [Op.like]: `%${studio}%`,
      },
    },
  });
};

import { DataTypes } from "sequelize";
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

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model { }

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      // references: {
      //   model: 'user',
      //   key: 'id',
      // },
    },
    searchTitle: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
    poster: {
      type: DataTypes.STRING,
    },
    director: {
      type: DataTypes.STRING,
    },
    plot: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'movie',
  }
);

module.exports = Movie;

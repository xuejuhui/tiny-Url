"use strict";
const { Model } = require("sequelize");
const shortid = require("shortid");

module.exports = (sequelize, DataTypes) => {
  class Url extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Group, { foreignKey: "groupId", as: "group" });
    }
  }
  Url.init(
    {
      fullUrl: DataTypes.STRING,
      shortUrl: { type: DataTypes.STRING, defaultValue: shortid.generate },
      groupId: DataTypes.INTEGER,
      counter: { type: DataTypes.INTEGER, defaultValue: 0 },

      alias: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Url",
    }
  );
  return Url;
};

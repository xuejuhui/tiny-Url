"use strict";
const shortid = require("shortid");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Urls", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shortUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: shortid.generate,
        unique: true,
      },
      groupId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Groups",
          key: "id",
        },
      },
      alias: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Urls");
  },
};

"use strict";

module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    return queryInterface.createTable("notes", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      author: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cues: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      summary: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface: any, Sequelize: any) => {
    return queryInterface.dropTable("notes");
  },
};

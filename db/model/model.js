const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "model",
    {
      model_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "model_id",
      },
      name: { type: DataTypes.STRING, allowNull: false, field: "name" },
      brand_id: {
        type: DataTypes.INTEGER,
        field: "brand_id",
      }

    },
    {
      tableName: "model", 
    }
  );

  return model;
};

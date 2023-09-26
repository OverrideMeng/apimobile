const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const brand = sequelize.define(
    "brand",
    {
      brand_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "brand_id",
      },
      name: { type: DataTypes.STRING, allowNull: false, field: "name" },
    },
    {
      tableName: "brand",
    }
  );

  return brand;
};

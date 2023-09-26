const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const spec = sequelize.define(
    "spec",
    {
      spec_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "spec_id",
      },
      memory: { type: DataTypes.STRING, allowNull: false, field: "memory" },
      storage: { type: DataTypes.STRING, allowNull: false, field: "storage" },
      color: { type: DataTypes.STRING, allowNull: false, field: "color" },
      price: { type: DataTypes.NUMBER, allowNull: false, field: "price" },
      purchase: { type: DataTypes.NUMBER, allowNull: false, field: "purchase" },
      model_id: {
        type: DataTypes.INTEGER,
        field: "model_id",
      }

    },
    {
      tableName: "spec", 
    }
  );

  return spec;
};

const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const grade = sequelize.define(
    "grade",
    {
      grade_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "grade_id",
      },
      name: { type: DataTypes.STRING, allowNull: false, field: "name" },
      pricedrop: {
        type: DataTypes.NUMBER,
        allowNull: false,
        field: "pricedrop",
      },
    },
    {
      tableName: "grade",
    }
  );

  return grade;
};

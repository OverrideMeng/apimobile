const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("mobileshop", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//ส่วนนี้เป็นการ import model ของ table ใน database เข้ามาเพื่อตั้งต่า relation นะครับ
db.brand = require("./model/brand")(sequelize, Sequelize);
db.model = require("./model/model")(sequelize, Sequelize);
db.spec = require("./model/spec")(sequelize, Sequelize);
db.grade = require("./model/grade")(sequelize, Sequelize);

db.brand.hasMany(db.model, {
  foreignKey: { name: "brand_id", field: "brand_id" }, //name ตรงสำคัญพยายามตั่งให้เป็นชื่อเดียวกับ FK ใน table ที่นำไปใช้นะครับ
});
db.model.hasMany(db.spec, {
  foreignKey: { name: "model_id", field: "model_id" }, //name ตรงสำคัญพยายามตั่งให้เป็นชื่อเดียวกับ FK ใน table ที่นำไปใช้นะครับ
});

db.model.belongsTo(db.brand, { foreignKey: 'brand_id' });
db.spec.belongsTo(db.model, { foreignKey: 'model_id' });

/*
//ส่วนนี้เป็นการตั้งต่า relation นะครับ โดยเป็นการบอกว่าใน 1 team มีได้หลาย player ง่ายๆ ก็คือ relation แบบ 1:M 
  db.brand.hasMany(
    db.model,
    {
        foreignKey: { name: 'brand_id', field: 'brand_id' }, //name ตรงสำคัญพยายามตั่งให้เป็นชื่อเดียวกับ FK ใน table ที่นำไปใช้นะครับ
    }
  );
//ส่วนนี้เป็นการตั้ง relation แบบกลับกันกับด้านบน จริงแล้วเราไม่ตั้งก็ได้นะครับแต่ผมแนะนำให้ตั้งเอาไว้ เพราะเวลาที่เราไม่ได้ใส่ 
//line นี้จะทำให้เราสามารถใช้  team ในการหา player ได้อย่างเดียวและไม่สามารถใช้ player หา team ได้
  db.model.belongsTo(db.brand, { foreignKey: 'brand_id' });
*/
module.exports = db;

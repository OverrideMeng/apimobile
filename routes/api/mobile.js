var express = require("express");
var router = express.Router();
const { Op } = require("sequelize");
const db = require("./../../db");
const databasepg = require("./../../db/index.js");
const { brand, model, spec, grade } = databasepg;
databasepg.sequelize.sync();

router.get("/", async (req, res) => {
  info = await spec.findAll();
  output = new Array();
  for (let i = 0; i < info.length; i++) {
    modelname = await model.findOne({
      where: { model_id: info[i].model_id },
    });
    var obj = {};
    brandname = await brand.findOne({
      where: { brand_id: modelname.brand_id },
    });
    obj["brand_id"] = brandname.brand_id;
    obj["brandname"] = brandname.name;
    obj["model_id"] = info[i].model_id;
    obj["modelname"] = modelname.name;
    obj["spec_id"] = info[i].spec_id;
    obj["memory"] = info[i].memory;
    obj["storage"] = info[i].storage;
    obj["color"] = info[i].color;
    obj["price"] = info[i].price;
    obj["purchase"] = info[i].purchase;

    infograde = await grade.findAll({
      order: [["grade_id", "ASC"], ["name"], ["pricedrop"]],
    });
    for (let j = 0; j < infograde.length; j++) {
      obj["grade " + infograde[j].name] =
        info[i].purchase * ((100 - infograde[j].pricedrop) / 100.0);
    }
    output.push(obj);
  }

  res.json(output);
});
router.get("/:modelname", async (req, res) => {
  modelname = req.params.modelname;
  info = await model.findAll({
    where: {
      name: {
        [Op.iLike]: "%" + modelname + "%",
      },
    },
  });

  console.log(info.length);
  if (!info) {
    res.sendStatus(500);
  } else {
    output = new Array();

    for (let i = 0; i < info.length; i++) {
      brandname = await brand.findOne({
        where: { brand_id: info[i].brand_id },
      });

      specinfo = await spec.findAll({
        where: { model_id: info[i].model_id },
      });

      for (let j = 0; j < specinfo.length; j++) {
        var obj = {};
        obj["brand_id"] = brandname.brand_id;
        obj["brandname"] = brandname.name;
        obj["model_id"] = info[i].model_id;
        obj["modelname"] = info[i].name;
        obj["spec_id"] = specinfo[j].spec_id;
        obj["memory"] = specinfo[j].memory;
        obj["storage"] = specinfo[j].storage;
        obj["color"] = specinfo[j].color;
        obj["price"] = specinfo[j].price;
        obj["purchase"] = specinfo[j].purchase;

        infograde = await grade.findAll({
          order: [["grade_id", "ASC"], ["name"], ["pricedrop"]],
        });
        for (let k = 0; k < infograde.length; k++) {
          obj["grade " + infograde[k].name] =
            specinfo[j].purchase * ((100 - infograde[j].pricedrop) / 100.0);
        }

        output.push(obj);
      }
    }

    res.json(output);
  }
});

module.exports = router;

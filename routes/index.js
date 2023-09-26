var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ราคารับซื้อมือถือมือสอง' ,
  text1:'หากต้องการดูราคาทุกรุ่น เพิ่ม /api',
  text2:'หากต้องการดูราคารุ่นที่สนใจ เพิ่ม /api/รุ่นที่สนใจ  เช่น (iPhone)',
});
});

module.exports = router;

const express = require('express');
const { DB } = require('../db/index');
const router = express.Router();

// 首页获取标签列表
router.get('/', function(req, res, next) {
  const sql = 'SELECT tag.* FROM `user` LEFT JOIN `tag` ON tag.user_id = `user`.id where `user`.email = "895457129@qq.com";';
    DB.query(sql, function (error, results, fields) {
      if (error) throw error;
      res.send({
        code: 0,
        data: results,
      });
    });
});

module.exports = router;

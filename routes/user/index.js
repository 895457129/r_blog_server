const express = require('express');
const session = require('express-session');
const { Login } = require('../../db/user');
const ErrorFormat = require('../../util/ErrorFormat');
const router = express.Router();

router.post('/login', async function (req, res, next) {
  const query = req.body || {};
  if (!Object.keys(query).length) {
    res.send(ErrorFormat.CONTENT_TYPE_ERROR);
    return false;
  }
  const result = await Login(query);
  if (result.code === 0) {
    req.session.loginUser = result.data.email;
  }
  res.send(result);
});
router.post('/loginOut', async function (req, res, next) {
  req.session.destroy();
  console.info(req.cookie);
  // req.session.cookie.maxAge = -1;
  res.send(ErrorFormat.DEFAULT);
});

module.exports = router;

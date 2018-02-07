const ErrorFormat = require('../util/ErrorFormat');

module.exports = permission = function(req, res, next) {
  const needLogin = ['/api/user/loginOut'];
  if (needLogin.indexOf(req.url) > -1 && !req.session.loginUser) {
    res.send(ErrorFormat.NO_AUTH);
  } else {
    next();
  }
};

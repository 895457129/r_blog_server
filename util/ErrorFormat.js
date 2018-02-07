class ErrorFormat {
  static get LOGIN_FAIL() {
    return {
      code: 1,
      msg: '用户名或者密码错误',
    };
  }
  static get DEFAULT() {
    return {
      code: 0,
      msg: "操作成功",
    }
  }
  static get NO_AUTH() {
    return {
      code: 2,
      msg: '请先登录',
    }
  }
  static get CONTENT_TYPE_ERROR() {
    return {
      code: 3,
      msg: '请求头请加上Content-Type=application/json',
    }
  }
}
module.exports = ErrorFormat;
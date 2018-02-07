const ErrorFormat = require('../util/ErrorFormat');
const { query } = require('./index');

async function Login({ email, password }) {
  const fail = ErrorFormat.LOGIN_FAIL;
  if (!email || !password) {
    return fail;
  }
  const sql = `SELECT email FROM user where \`user\`.email = '${email}' 
  and user.\`password\` = '${password}' limit 1;`;
  const result = await query(sql);
  if (result.length) {
    return {
      code: 0,
      data: result[0],
    };
  } else {
    return fail;
  }
}
module.exports = {
  Login,
};

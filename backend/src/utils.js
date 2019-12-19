const jwt = require('jsonwebtoken');

function getUserId(ctx) {
  const authorization = ctx.request.get('Authorization');
  if (authorization) {
    const token = authorization.replace('Bearer ', '');
    const { client_id } = jwt.verify(token, process.env.JWT_SECRET);
    return client_id;
  }

  throw new Error('Unauthorized');
}

module.exports = {
  getUserId
};

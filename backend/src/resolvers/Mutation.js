const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (_, args, ctx, info) => {
  const password = await bcrypt.hash(args.password, 10);
  const user = await ctx.db.mutation.createUser({
    data: {
      ...args,
      password
    }
  });

  const token = jwt.sign({ client_id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '2h'
  });

  return {
    token,
    user
  };
};

module.exports = {
  signup
};

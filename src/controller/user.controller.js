const { userService } = require('../services');

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.send(users);
};

module.exports = {
  getUsers,
};
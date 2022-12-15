const {userService} = require("../services");

const getUsers = async (req, res) => {
	const users = await userService.getUsers();
	res.send(users);
};

const createUser = async (req, res) => {
	const newUserId = await userService.createUser(req.body);
	res.send(newUserId);
};

module.exports = {
	getUsers,
	createUser,
};

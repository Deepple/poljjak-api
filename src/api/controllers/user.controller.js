import {userService} from "../services/user.service.js";

export const getUsers = async (req, res) => {
	// const users = await userService.getUsers();
	const users = "hello!!"
	res.send(users);
};

export const createUser = async (req, res) => {
	const newUserId = await userService.createUser(req.body);
	res.send(newUserId);
};

export const userController = {
	getUsers,
	createUser,
};

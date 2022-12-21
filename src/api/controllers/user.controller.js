import {userService} from "../services/user.service.js";
import {hashPassword} from "../utils/bcrypt.js";

const getUsers = async (req, res) => {
	const users = await userService.getUsers();
	res.send(users);
};

const getUserByEmail = async (req, res) => {
	const {email} = req.body;
	const user = await userService.getUserByEmail(email);
	res.send(user)
};

const createUser = async (req, res) => {
	const {email, password} = req.body;
	const hashedPassword = await hashPassword(password);
	const userInfo = await userService.createUser(email, hashedPassword);
	res.send(userInfo);
};

export const userController = {
	getUsers,
	createUser,
	getUserByEmail,
};

import {userService} from "../services/user.service.js";
import {hashPassword} from "../utils/bcrypt.js";

const getUsers = async (req, res) => {
	const users = await userService.getUsers();
	res.send(users);
};

const createUser = async (req, res) => {
	const email = req.body.email;
	const hashedPassword = await hashPassword(req.body.password);
	const userInfo = await userService.createUser({email, hashedPassword});
	res.send(userInfo);
};

export const userController = {
	getUsers,
	createUser,
};

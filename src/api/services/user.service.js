import {database} from "../../config/database.js";

const getUsers = () => {
	return database("user");
};

const getUserByEmail = (email) => {
	return database("user").select("email", "password").where("email", email);
};

const createUser = (email, password) => {
	return database("user").returning(["id", "email"]).insert({
		email,
		password,
	});
};

export const userService = {
	getUsers,
	createUser,
	getUserByEmail,
};

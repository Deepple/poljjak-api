import {database} from "../../config/database.js";

const getUsers = () => {
	return database("user");
};

const createUser = ({email, password}) => {
	return database("user").returning(["id", "email", "password"]).insert({
		email,
		password
	});
};

export const userService = {
	getUsers,
	createUser,
};

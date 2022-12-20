import {database} from "../../config/database.js";

const getUsers = () => {
	return database("user");
};

const createUser = ({user_name, password}) => {
	return database("user").returning(["id", "user_name"]).insert({
		user_name,
		password,
	});
};

export const userService = {
	getUsers,
	createUser,
};
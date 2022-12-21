import {userService} from "../services/user.service.js";
import {isPasswordMatch} from "../utils/bcrypt.js";

const login = async (req, res) => {
	const {email, password} = req.body;
	const user = await userService.getUserByEmail(email);
	if (!(await isPasswordMatch(password, user[0].password))) {
		res.send("로그인 실패!");
		return
	}
	res.send("로그인 성공!");
};

export const authController = {
	login,
};

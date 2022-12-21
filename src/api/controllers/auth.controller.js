import {userService} from "../services/user.service.js";
import {isPasswordMatch} from "../utils/bcrypt.js";

const login = async (req, res) => {
	const {email, password} = req.body;
	const userInfo = await userService.getUserByEmail(email);
	if (!userInfo.length) {
		return res.send("존재하지 않는 이메일입니다.");
	}
	if (!(await isPasswordMatch(password, userInfo[0].password))) {
		return res.send("로그인 실패!");
	}
	return res.send("로그인 성공!");
};

export const authController = {
	login,
};

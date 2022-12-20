import bcrypt from "bcrypt";

export const hashPassword = async (plainPassword) => {
	return await bcrypt.hash(plainPassword, 3);
};

export const isPasswordMatch = async (plainPassword, hashedPassword) => {
	return await bcrypt.compare(plainPassword, hashedPassword);
}
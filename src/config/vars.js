import path from "path";
import dotenv from "dotenv";
import {__dirname} from "../api/utils/dirname.js";

const envPath =
	process.env.NODE_ENV === "development"
		? path.join(__dirname, "/../../../.env.development")
		: path.join(__dirname, "/../../../.env.production");

dotenv.config({path: envPath});

export const env = process.env.NODE_ENV;
export const port = process.env.PORT || 3000;

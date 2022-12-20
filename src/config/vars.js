import dotenv from "dotenv";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const envPath =
	process.env.NODE_ENV === "development"
		? path.join(__dirname, "/../../.env.development")
		: path.join(__dirname, "/../../.env.production");

dotenv.config({path: envPath});

export const env = process.env.NODE_ENV;
export const port = process.env.PORT || 3000;

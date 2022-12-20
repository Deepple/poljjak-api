import dotenv from "dotenv";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const envPath =
	process.env.NODE_ENV === "development"
		? path.join(__dirname, "./.env.development")
		: path.join(__dirname, "./.env.production");

dotenv.config({path: envPath});

const knexFile = {
	development: {
		client: "pg",
		connection: {
			database: process.env.DB_NAME,
			user: process.env.DB_USER,
			password: null,
			port: process.env.DB_PORT,
			host: process.env.DB_HOST,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: __dirname + "/src/api/model/migrations",
		},
		seeds: {directory: __dirname + "/src/api/model/seeds"},
	},
};

export default knexFile;

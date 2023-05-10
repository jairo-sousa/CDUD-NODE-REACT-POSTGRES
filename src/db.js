import postgres from "postgres";
import * as dotenv from "dotenv";

dotenv.config();
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

export const db = postgres({
	host: "localhost",
	user: USER,
	password: PASSWORD,
	database: "USER_CRUD",
});

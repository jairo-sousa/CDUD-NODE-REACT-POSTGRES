import pg from "pg";
const { Client } = pg;
import * as dotenv from "dotenv";

dotenv.config();
const USER = process.env.DB_USER;
const PASSWORD = process.env.PASSWORD;

export const db = new Client({
	host: "localhost",
	port: 5432,
	user: USER,
	password: PASSWORD,
	database: "USER_CRUD",
});

import express from "express";
import {
	getUsers,
	addUser,
	updateUser,
	deleteUser,
} from "../controllers/user.js";

const userRoutes = express.Router();

userRoutes.get("/", getUsers);

userRoutes.post("/", addUser);

userRoutes.put("/:id", updateUser);

userRoutes.delete("/:id", deleteUser);

export default userRoutes;

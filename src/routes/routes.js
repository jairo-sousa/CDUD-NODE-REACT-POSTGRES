import express from "express";
import { getUsers, addUser, updateUser } from "../controllers/user.js";

const userRoutes = express.Router();

userRoutes.get("/", getUsers);

userRoutes.post("/", addUser);

userRoutes.put("/:id", updateUser);

export default userRoutes;

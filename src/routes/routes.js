import express from "express";
import { getUsers, addUser } from "../controllers/user.js";

const userRoutes = express.Router();

userRoutes.get("/", getUsers);

userRoutes.post("/", addUser);

export default userRoutes;

import express from "express";
import { getUsers } from "../controllers/getUsers.js";

const userRoutes = express.Router();

userRoutes.get("/", getUsers);

export default userRoutes;

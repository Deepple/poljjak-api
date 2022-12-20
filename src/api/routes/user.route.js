import {Router} from "express";
import {userController} from "../controllers/user.controller.js";

const router = Router();

const userRoutes = router
	.get("/", userController.getUsers)
	.post("/", userController.createUser);

export default userRoutes;

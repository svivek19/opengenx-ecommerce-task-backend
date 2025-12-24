import express from "express";
import {
  registerAdmin,
  loginAdmin,
  getAllUsers,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", registerAdmin);
authRouter.post("/login", loginAdmin);
authRouter.get("/users", getAllUsers);

export default authRouter;

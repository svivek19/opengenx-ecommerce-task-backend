import express from "express";
import { getDashboardStats } from "../controllers/dashboard.controller.js";
import protect from "../middleware/auth.middleware.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/stats", protect, getDashboardStats);

export default dashboardRouter;

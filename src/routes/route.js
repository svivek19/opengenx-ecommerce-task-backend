import express from "express";
import authRouter from "./auth.route.js";
import productRouter from "./product.route.js";
import orderRouter from "./order.route.js";
import dashboardRouter from "./dashboard.route.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);
router.use("/dashboard", dashboardRouter);

export default router;

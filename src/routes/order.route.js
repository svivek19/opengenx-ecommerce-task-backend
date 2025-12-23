import express from "express";
import {
  createOrder,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/order.controller.js";
import protect from "../middleware/auth.middleware.js";

const orderRouter = express.Router();

orderRouter.post("/", protect, createOrder);
orderRouter.get("/", protect, getAllOrders);
orderRouter.patch("/:id", protect, updateOrderStatus);

export default orderRouter;

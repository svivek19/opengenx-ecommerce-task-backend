import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import protect from "../middleware/auth.middleware.js";

const productRouter = express.Router();

productRouter.post("/", protect, createProduct);
productRouter.get("/", protect, getAllProducts);
productRouter.patch("/:id", protect, updateProduct);
productRouter.delete("/:id", protect, deleteProduct);

export default productRouter;

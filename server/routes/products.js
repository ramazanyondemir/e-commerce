import express from "express";
import { addProduct, getProducts } from "../controllers/productsController.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", addProduct);

export default router;

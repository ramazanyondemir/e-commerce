import express from "express";
import { changeUserInfo } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/info", authMiddleware, changeUserInfo);
// router.post("/changepassword", authMiddleware, );

export default router;

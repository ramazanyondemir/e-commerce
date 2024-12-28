import express from "express";
import { login, register, logout } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.get("/logout", logout);
router.post("/register", register);

export default router;

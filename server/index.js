import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./db.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";
import { me } from "./controllers/authController.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

connectDb();

app.use(
  cors({
    // Sadece localhost:5173 origin'i sunucuya istek gönderebilir diğer originler erişemez.
    origin: `${import.meta.env.BASE_URL}/${import.meta.env.CLIENT_PORT}`,
    credentials: true,
  })
);
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true })); // URL kodlanmış veri (form verileri) analizi için Express'in kendi body-parser'ını kullanmak
app.use(cookieParser());

app.get("/me", me);

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server ${port}'unda çalışıyor`);
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./db.js";
import authRouter from "./routes/auth.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // URL kodlanmış veri (form verileri) analizi için Express'in kendi body-parser'ını kullanmak

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server ${port}'unda çalışıyor`);
});

import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;

// getting - started.js;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/deneme");

  const kittySchema = new mongoose.Schema({
    name: String,
  });

  const Kitten = mongoose.model("Kitten", kittySchema);

  const silence = new Kitten({ name: "Silence" });
  console.log(silence.name);
}

app.get("/", (req, res) => {
  const ipAddress = req.socket.remoteAddress;
  console.log("ip: ", ipAddress);
  res.send(ipAddress);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

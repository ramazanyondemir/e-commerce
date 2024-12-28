import express from "express";

const apiRouter = express.Router();

router.all("/", (req, res) => {
  res.send("test");
});

export default apiRouter;

import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URI}/?retryWrites=true&w=majority&appName=${process.env.DB_APP_NAME}`,
      { dbName: process.env.DB_APP_NAME }
    )
    .then(() => {
      console.log("Connected to the DB succesully");
    })
    .catch((err) => {
      console.log(`DB connection err:',${err}`);
    });
};

export default connectDb;

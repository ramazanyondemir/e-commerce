import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose
    .connect(process.env.DB_URI, {
      dbName: "e-commerce",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to the DB succesully");
    })
    .catch((err) => {
      console.log(`DB connection err:',${err}`);
    });
};

export default connectDb;

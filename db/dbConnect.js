import mongoose from "mongoose";
import { config } from "dotenv";
config();

function dbConnect() {
  mongoose
    .connect(
      process.env.MONGODB_URI,
      {
        useNewUrlPArser: true
      }
    )
    .then(() => {
      console.log("Successfully connected to database!");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default dbConnect;

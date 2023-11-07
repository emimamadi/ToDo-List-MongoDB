import mongoose from "mongoose";

import "dotenv";

const db = process.env.MONGODB_URI;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(`${db}`);

    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;

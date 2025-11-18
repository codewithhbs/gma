import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("⚠️  MONGODB_URI not found in .env");

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) return;
  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = db.connections[0].readyState;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB connection error", err);
    throw err;
  }
};

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { connectToDB } from "@/lib/dbConnect";
// --- User Schema ---
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin"], default: "admin" },
  },
  { timestamps: true }
);

// --- Model ---
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserModel;

// --- Helper functions ---
export async function createAdmin(name, email, plainPassword) {
  await connectToDB();
  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  const admin = new UserModel({ name, email, password: hashedPassword, role: "admin" });
  await admin.save();
  return admin;
}

export async function findAdminByEmail(email) {
  await connectToDB();
  return UserModel.findOne({ email });
}

export async function verifyPassword(plainPassword, hashedPassword) {
  return bcrypt.compare(plainPassword, hashedPassword);
}

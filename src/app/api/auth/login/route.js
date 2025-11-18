// import { NextResponse } from "next/server";
// import { connectToDB } from "@/lib/dbConnect";
// import User from "@/lib/models/User";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";

// export async function POST(req) {
//   await connectToDB();

//   const { email, password } = await req.json();
//   const user = await User.findOne({ email });

//   if (!user) {
//     return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
//   }

//   const valid = await bcrypt.compare(password, user.password);
//   if (!valid) {
//     return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
//   }

//   const token = jwt.sign(
//     { id: user._id, email: user.email, role: "admin" },
//     process.env.JWT_SECRET,
//     { expiresIn: "1d" }
//   );

//   return NextResponse.json({ token });
// }




import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { connectToDB } from "@/lib/dbConnect";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    await connectToDB();

    // --- Find User ---
    const admin = await User.findOne({ email });

    if (!admin) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // --- Compare bcrypt hashed password ---
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // --- Generate JWT ---
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new SignJWT({ id: admin._id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1d")
      .sign(secret);

    // --- Set cookie ---
    const response = NextResponse.json({ success: true });

    response.cookies.set("adminToken", token, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;

  } catch (err) {
    return NextResponse.json(
      { error: "Server error", details: err.message },
      { status: 500 }
    );
  }
}

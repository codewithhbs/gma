// import { NextResponse } from "next/server";
// import { connectToDB } from "@/lib/dbConnect";
// import { verifyToken } from "@/lib/auth";
// import User from "@/lib/models/User";

// export async function GET(req) {
//   await connectToDB();

//   // Read token from headers (same as middleware)
//   const token = req.headers.get("x-admin-token");

//   if (!token) {
//     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//   }

//   try {
//     const payload = verifyToken(token);
//     const user = await User.findById(payload.sub).select("-password");
//     return NextResponse.json({ message: "Welcome", user });
//   } catch {
//     return NextResponse.json({ message: "Invalid token" }, { status: 401 });
//   }
// }



import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConnect";
import User from "@/lib/models/User";
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  await connectToDB();

  const token = req.headers.get("x-admin-token");

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const payload = verifyToken(token);  // payload.id exists

    const user = await User.findById(payload.id).select("-password");

    if (!user) {
      return NextResponse.json({ message: "Invalid user" }, { status: 401 });
    }

    return NextResponse.json({ message: "Welcome", user });
  } catch {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}

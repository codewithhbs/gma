import bcrypt from "bcryptjs";

const password = "GmAScHooL@5427"; // 👉 replace with your desired password
const hashed = await bcrypt.hash(password, 10);
console.log("Hashed password:", hashed);


// gma@gmail.com

// yourNewPassword

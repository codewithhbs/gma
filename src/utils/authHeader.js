// export function authHeader() {
//   try {
//     const token = localStorage.getItem("adminToken");
//     console.log("TOKEN USED IN REQUEST →", token);   // 🔥 add this
//     return token ? { "x-admin-token": token } : {};
//   } catch {
//     return {};
//   }
// }


export const authHeader = () => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

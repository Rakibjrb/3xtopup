import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import jwt from "jsonwebtoken";
import { connectDB } from "@/utils/db/db";

const checkInfo = async (credentials) => {
  await connectDB();
  const user = await Users.findOne({ email: credentials.email });
  if (!user) throw new Error("User not registered on this email");

  const checkPass = jwt.verify(
    user.password,
    process.env.NEXTAUTH_SECRET,
    function (err, decoded) {
      if (err) err;
      return decoded;
    }
  );

  if (!(checkPass === credentials.password))
    throw new Error("Invalid password");

  return user;
};

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        return checkInfo(credentials);
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

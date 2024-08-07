import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import axios from "axios";

const checkUserSignIn = async (credentials) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_ServerAddress}/api/handle-login`,
    credentials
  );

  if (res.data.message == "no user") {
    throw new Error("No user registered on this email");
  }
  if (res.data.message == "invalid password") {
    throw new Error("Invalid Password !!!");
  }
  return res.data;
};

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        return checkUserSignIn(credentials);
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

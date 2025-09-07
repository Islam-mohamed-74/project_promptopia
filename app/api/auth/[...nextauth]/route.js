import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // Safely enrich session with user id if available
      try {
        if (!session?.user?.email) return session;
        await connectDB();
        const sessionUser = await User.findOne({ email: session.user.email });
        if (sessionUser?._id) {
          session.user.id = sessionUser._id.toString();
        }
        return session;
      } catch (err) {
        console.error("session callback error:", err);
        return session;
      }
    },
    async signIn({ profile }) {
      try {
        await connectDB();
        const userExists = await User.findOne({ email: profile.email });
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };

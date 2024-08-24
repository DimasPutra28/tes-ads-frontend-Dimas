import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
    } & DefaultUser;
  }

  interface User {
    id: string;
    username: string;
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const user = {
          id: '1',
          username: 'admin',
          name: 'adminuser',
          email: 'admin@user.com'
        };

        if (credentials.email === user.email && credentials.password === 'admin123') {
          return user;
        }

        return null;
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.username = token.username as string;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    }
  },
  pages: {
    signIn: '/signin',
  },
});
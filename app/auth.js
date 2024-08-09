import NextAuth from 'next-auth';
import { authConfig } from './authconfig';
import Credentials from 'next-auth/providers/credentials';
import { connectToDB } from './lib/utils';
import { User } from './lib/models';
import bcrypt from 'bcryptjs';


//login
const login = async (credentials) => {

  try {
      await connectToDB();
      const user = await User.findOne({ username: credentials.username });

      if (!user) {
          throw new Error('Wrong Credentials');
      }

      const isMatch = await bcrypt.compare(credentials.password, user.password);

      if (!isMatch) {
          throw new Error('Wrong Credentials');
      }

      return user;

  } catch (error) {
      console.error(error);  // Log the actual error
      throw new Error('Authentication failed');  // More user-friendly message
  }
};
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
          try {
              const user = await login(credentials);
              if (user) {
                  return user; // Return the user object
              } else {
                  throw new Error('Invalid credentials');
              }
          } catch (error) {
              console.error('Authorization error:', error);
              throw new Error('Failed to login');
          }
      },
  }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
       session.user.username = token.username;
       session.user.img = token.img;
      }
      return session;
    }
  }
 
});
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

console.log(process.env.SPOTIFY_CLIENT_ID!)

export const authOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
        }),
    ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}
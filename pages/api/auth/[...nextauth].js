import NextAuth from "next-auth"; 
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
      CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
              username: { label: "Username", type: "text", placeholder: "Enter your username" },
              password: {  label: "Password", type: "password", placeholder: "Enter your password" }
            },
            authorize: async (credentials) => {
              // Add logic here to look up the user from the credentials supplied
              const response = await fetch("https://spes.pscgh.com:442/pp_test/api/Authentication/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName: credentials?.username,
                    password: credentials?.password,
                }),
            });

            const user = await response.json();
            
        
              if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return Promise.resolve(user)
              } else {
                // If you return null or false then the credentials will be rejected
                return Promise.resolve(null)
              }
            }
          }),
          GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token, user }) {
          session.user = token;
          return session;
        }
    }
})
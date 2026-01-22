import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Crendentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials){
        //basic validation
        if(credentials.email === "Shadab@gmail.com" && credentials.password === " "){
            return { id: '1', name :"Test User", email : "Shadab@gmail.com"};
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt"
  },
  secret: "jfljsdiowejfklsjfeojakfopjop" ,//Use process.env.NEXTAUTH_SECRET in production
});

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcrypt";
import connect from "@/utils/db";

const handler = NextAuth({
providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        async authorize(credentials) {
            //Check if the user exists.
        await connect();

            console.log('Connected')
            console.log(credentials.email)
            console.log(credentials.password)

            try {
                console.log('Start Try')

                const user = await User.findOne({
                        email: credentials.email,
                });

                console.log('Start User Try')
                console.log(user)

                if (user) {
                    console.log('There is User')

                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                    console.log(`pass is : ${isPasswordCorrect}`)

                    if (isPasswordCorrect) {
                        return user;
                    } else {
                        throw new Error("Wrong Credentials!");
                    }
                }
                else {
                    console.log('Not User')
                    throw new Error("User not found!");
                }
            } catch (err) {
                throw new Error(err);
            }
        },
    }),
],
pages: {
    error: "/dashboard"
}
})

export {
handler as GET,
handler as POST
}
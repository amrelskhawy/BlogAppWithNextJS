import Post from "@/models/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt";
import User from "@/models/User";


export const POST = async (request) => {
    // fetch
        const {name, email,password} = await request.json()

        const hashedPassword = await bcrypt.hash(password, 5);

        await connect();

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        try {

        await newUser.save();

        return new NextResponse( "New User Has Been Created!" , {
            status: 201
        })

    } catch (error) {
        return new NextResponse(error, {
            status: 500
        })
    }
}
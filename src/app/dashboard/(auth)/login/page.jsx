"use client"
import React, {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {signIn, useSession} from "next-auth/react";
import {AiOutlineGoogle} from "react-icons/ai";

const LoginInputs = [
    {
        id: "email",
        title: "Email",
        placeholder: "Ex. amrelskhawy@text.com",
        type: "email",
        required: true
    },{
        id: "password",
        title: "Password",
        placeholder: "Enter Your Password",
        type: "password",
        required: true
    }
]

export const metadata = {
    title: "Login",
    description: 'Login to can maintain and control your posts'
}

const Login = () => {

    const [err, setErr] = useState("");

    const router = useRouter()
    const [formData, setFormData] = useState({
        "email": '',
        "password": '',
    })

    const  {status} = useSession()

    const handleChange = (e) => {
        const {value, name} = e.target

        setFormData((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const credentials = formData
        try {
            signIn("credentials", credentials)
        } catch (e) {
            setErr(e.message)
        }
    }

    if (status === "authenticated") {
        router?.push("/dashboard");
    }

    else {

    return (
        <div className='w-full max-w-[400px] h-fit p-4  grid mx-auto '>
            <h1 className='text-center text-2xl font-bold mb-8'>Login</h1>
            <form className=' w-full grid gap-4' onSubmit={handleSubmit}  action="">
                {
                    LoginInputs.map(inp => (
                        <div className='grid gap-2' key={inp.id}>
                            <label htmlFor={inp.id}>{inp.title}</label>
                            <input
                                className='p-2 px-3 outline-none bg-transparent border rounded-lg'
                                id={inp.id}
                                type={inp.type}
                                required={inp.required}
                                placeholder={inp.placeholder}
                                name={inp.id}
                                onChange={handleChange}
                            />
                        </div>
                    ))
                }
                <div className="btns grid grid-cols-3 gap-2">
                <button className='p-2 bg-[#53c284] text-white mt-4 rounded-lg col-span-2 ' type="submit">Login</button>
                <button
                    onClick={() => signIn('google')}
                    className='p-2 bg-[#53c284] text-center text-xl justify-center flex items-center text-white mt-4 rounded-lg ' >
                    <AiOutlineGoogle />
                </button>

                </div>
            </form>

            <p>{err}</p>

            <Link className={'underline my-3'}  href={'/dashboard/register'}>
                create a new account
            </Link>
        </div>
    )
    }

}

export default Login
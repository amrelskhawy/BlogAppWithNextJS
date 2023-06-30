"use client"
import React, {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";


const registerInputs = [
    {
        id: "name",
        title: "Name",
        placeholder: "Ex. Amr Elskhawy",
        type: "text",
        required: true
    },{
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
    },{
        id: "confirmPassword",
        title: "Re-Password",
        placeholder: "Enter Your Password Again",
        type: "password",
        required: true
    },
]
const Register = () => {
    const [err, setErr] = useState("");
    const router = useRouter()
    const [formData, setFormData] = useState({
        "name":'',
        "email": '',
        "password": '',
        "confirmPassword" : ''
    })

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
        try {
            const res = await fetch('/api/auth/register', {
                body: JSON.stringify(formData),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            res.status === 201
                &&
                router.push('/dashboard/login?success=Account has been created')
        } catch (e) {
            setErr(e.message)
        }
    }

    return (
        <div className="grid  w-full  max-w-[400px] mx-auto ">
            <h1 className='text-center text-2xl font-bold mb-8'>Register</h1>
            <form
                  className=" w-full flex flex-col gap-5"
                  onSubmit={handleSubmit}>
                {
                    registerInputs.map(inp => (
                        <div className='grid gap-2 w-full' key={inp.id}>
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
                <button type={"submit"}
                    className="p-2 bg-[#53c284] text-white rounded-lg">
                    Register</button>
            </form>
            {err && <p className={'w-full my-4 bg-red-500 text-white text-center p-2 '}> {err}</p>}
            <Link className={'underline my-3'} href={'/dashboard/login'} >
                Login with an existing account</Link>
        </div>
    )
}

export default Register
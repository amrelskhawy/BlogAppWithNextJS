'use client'
import React, { useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Input from "@/components/Input";
import Textarea from "@/components/textarea";
import Button from "@/components/Button";
import Loading from "./loading";

export const metadata = {
  title: 'Dashboard',
}

const myInputs = [
  {
    id: 'title',
    type: 'text',
    placeholder: 'Title',
  }, {
    id: 'desc',
    type: 'text',
    placeholder: 'Desc',
  }, {
    id: 'img',
    type: 'text',
    placeholder: 'Image',
  }
]

const defaultData = {
  title: '',
  desc: '',
  img: '',
  content: ''
}

const Dashboard = () => {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    img: '',
    content: ''
  })
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const session = useSession()

  const { data, error, mutate, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`, fetcher
  )


  const router = useRouter()

  const handleDelete = async (id) => {
    try {
      await fetch('/api/posts/'+id, {
        method: "DELETE",
      })
      mutate()

    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()


    try {
      await fetch('/api/posts', {
        method: "POST",
        body: JSON.stringify({
          ...formData, username: session.data.user.name
        })
      })
      mutate()
      setFormData(defaultData)

    } catch (err) {

    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => {
      return (
        { ...prev, [name]: value }
      )
    })

  }

  // if (session?.status === "unauthenticated") {
  //     router?.push("/dashboard/login");
  // }
  //
  // if (session?.status === "authenticated") {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {
        /*
          Start the posts
        */
      }
      <div className="posts p-8 relative">

        {
          isLoading ? <Loading /> :
          data?.map(post => (
            <div className='post flex items-center justify-between my-[50px] ' key={post.id}>
              <div className="imgContainer w-[200px] h-[100px] relative">
                <Image className="object-cover" 
                fill={true} src={post.img} alt="" />
              </div>
              <h2 className="postTitle">{post.title}</h2>
              <span className='delete cursor-pointer'
                onClick={() => handleDelete(post._id)}
              >X</span>
            </div>
          ))
        }

      </div>
      {
        /*
          Start the Create post form
        */
      }
      <form className="grid gap-3">
        <h1
          className='text-5xl font-bold mb-6'
        >Add New Post</h1>
        {
          myInputs.map(inp => (
            <Input
              key={inp.id}
              name={inp.id}
              type={inp.type}
              placeholder={inp.placeholder}
              title={inp.title}
              value={formData[inp.id]}
              onChange={handleChange}
            />
          ))
        }
        <Textarea
          placeholder={"Content"}
          name={"content"}
          value={formData['content']}
          onChange={handleChange}
        />
        <Button
          className={"w-full"}
          url={''}
          text={'Add a Post'}
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
  // }
}

export default Dashboard
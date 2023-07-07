'use client'
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import Input from "@/components/Input";
import Textarea from "@/components/textarea";
import Button from "@/components/Button";

export const metadata = {
  title: 'Dashboard',
}

const myInputs = [
  {
    id: 'title',
    type: 'text',
    placeholder: 'Title',
  },{
    id: 'desc',
    type: 'text',
    placeholder: 'Desc',
  },{
    id: 'img',
    type: 'text',
    placeholder: 'Image',
  }
]


const Dashboard = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const session= useSession()

  const {data, error, loading} = useSWR(
      `/api/posts?username=${session?.data?.user.name}`, fetcher
  )

  console.log(`/api/posts?username=${session?.data?.user.name}`)

  const router = useRouter()

    if (session?.status === "unauthenticated") {
        router?.push("/dashboard/login");
    }

    if (session?.status === "authenticated") {
      return (
        <div className='grid grid-cols-2 gap-4'>
          <div className="posts">

            {
              data?.map(post => (
                    <div className='post' key={post.id}>
                       <div className="imgContainer">
                         <Image src={''} alt=""/>
                       </div>
                       <h2 className="postTitle"></h2>
                       <span className='delete'>X</span>
                    </div>
                 )
              )
            }

          </div>
          <form className="grid gap-2">
            <h1>Add New Post</h1>
            {
              myInputs.map(inp => (
                  <Input
                      key={inp.id}
                      type={inp.type}
                      placeholder={inp.placeholder}
                      title={inp.title}
                  />
              ))
            }
            <Textarea
                placeholder={"Content"}
            />
            <Button
              className={"w-full"}
              url={''}
              text={'Add a Post'}
            />
          </form>
        </div>
      )
    }
}

export default Dashboard
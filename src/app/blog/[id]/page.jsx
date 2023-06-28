
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation"

const getData = async ({ id }) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: "no-store"
    })

  if (!res.ok) {
    // return notFound()
  }
  return res.json()
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
 
  // fetch data
  const post = await getData(params)
  
 
  return {
    title: post.title,
  }
}
 
const BlogPost = async ({ params }) => {

  const data = await getData(params)
  console.log(data.title)
  return (
    <div className="flex flex-col ">
      <div className="flex gap-4 mb-8">
        <div className=" flex-1 flex flex-col justify-between">
          <h1 className="text-[36px] font-bold">
            {data.title} </h1>
          <br />
          <p className="text-xl font-[300]">
            {data.desc}

          </p>
          <div className="flex items-center relative gap-3">
            <Image
              src="https://images.pexels.com/photos/7328286/pexels-photo-7328286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              height={40}
              width={40}

              className=" object-cover relative h-12 w-12 rounded-full"
            />
            <span className="inline-block">{data.username}</span>
          </div>
        </div>

        <div className="h-[300px] w-full  flex-1 relative">
          <Image
            src={data.img}
            alt=""
            loading="lazy"
            fill={true}
            className="object-cover "
          />
        </div>
      </div>
      <div className="flex-1">
        <p className="mt-13 text-xl font-[300] text-[#999] text-justify">
          {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost
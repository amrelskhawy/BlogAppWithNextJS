import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error('Failed to Fetch Data')
  }
  return res.json()
}

export const metadata = {
  title: 'Our Blog',
  description: 'Say What you want freely',
}


const Blog = async () => {

  const data = await getData()
  // const data = []


  return (
    <div className="">

      {
        data.map(post => (
          <Link key={post._id} className="flex  items-center gap-12 mb-12" href={"blog/"+ post._id } >
            <div className="">
              <Image
                src={post.img}
                alt=""
                width={400}
                height={250}
                className="object-cover flex-1"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-5">{post.title}</h1>
              <p className="text-xl text-justify">{post.desc}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Blog
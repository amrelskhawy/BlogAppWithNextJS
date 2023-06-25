import Image from "next/image";
import Link from "next/link";
import React from "react";


const Blog = () => {
  return (
    <div className="">

      <Link className="flex  items-center gap-12 mb-12" href="blog/testID" >
        <div className="">
          <Image
            src="https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className="object-cover flex-1"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-5">Test</h1>
          <p className="text-xl text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cupiditate voluptatibus quibusdam consectetur officiis reiciendis praesentium atque, aliquid voluptatum temporibus, porro libero beatae explicabo, sunt magni sapiente totam perferendis magnam. </p>
        </div>
      </Link>


    </div>
  )
}

export default Blog
"use client"

import React from "react";
import Image from "next/image";

const BlogPost = ({ params }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex gap-4 mb-8">
        <div className=" flex flex-col   justify-between">
          <h1 className="text-[36px] font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1>
          <br />
          <p className="text-xl font-[300]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis iste quaerat porro labore eaque nostrum consequuntur recusandae molestiae est numquam, corrupti excepturi repudiandae similique amet temporibus architecto doloremque sunt ipsa.


          </p>
          <div className="flex items-center relative gap-3">
            <Image
              src="https://images.pexels.com/photos/7328286/pexels-photo-7328286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              height={40}
              width={40}
              
              className=" object-cover relative h-12 w-12 rounded-full"
            />
            <span className="inline-block">John Doe</span>
          </div>
        </div>





        <div className="h-[300px] w-full relative">
          <Image
            src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            loading="lazy"
            fill={true}
            className="object-cover "
          />
        </div>
      </div>


      <div className="flex-1">
        <p className="mt-13 text-xl font-[300] text-[#999] text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis iste quaerat porro labore eaque nostrum consequuntur recusandae molestiae est numquam, corrupti excepturi repudiandae similique amet temporibus architecto doloremque sunt ipsa.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis iste quaerat porro labore eaque nostrum consequuntur recusandae molestiae est numquam, corrupti excepturi repudiandae similique amet temporibus architecto doloremque sunt ipsa.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis iste quaerat porro labore eaque nostrum consequuntur recusandae molestiae est numquam, corrupti excepturi repudiandae similique amet temporibus architecto doloremque sunt ipsa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis iste quaerat porro labore eaque nostrum consequuntur recusandae molestiae est numquam, corrupti excepturi repudiandae similique amet temporibus architecto doloremque sunt ipsa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis iste quaerat porro labore eaque nostrum consequuntur recusandae molestiae est numquam, corrupti excepturi repudiandae similique amet temporibus architecto doloremque sunt ipsa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis iste quaerat porro labore eaque nostrum consequuntur recusandae molestiae est numquam, corrupti excepturi repudiandae similique amet temporibus architecto doloremque sunt ipsa.
        </p>
      </div>
    </div>
  )
}

export default BlogPost
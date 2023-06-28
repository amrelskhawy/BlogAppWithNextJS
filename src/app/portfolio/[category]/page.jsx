import Button from "@/components/Button";
import { items } from "./data.js"
import Image from "next/image";
import React from "react";
import {notFound} from "next/navigation"

const getData = (cat) => {
  const data = items[cat]

  if(data) {
    return data
  }
  return notFound()
}


const Category = ({ params }) => {

  const category = getData(params.category)

  return (

    <div>
      <h1 className="text-3xl font-bold text-[#53c28b] capitalize">
        {params.category}
      </h1>
      {
        category.map(el => (
          <div key={el.id}>
            <div className={`flex ${el.id % 2 == 0 ? 'flex-row-reverse' : ''} item gap-12 my-12 `}>
              <div className="flex-1 flex flex-col gap-5 justify-center">
                <h2 className="text-4xl font-semibold">{el.title}</h2>
                <p className="text-2xl leading-10">{el.desc}</p>
                <Button url='' text='See More' />
              </div>
              <div className="flex-1 h-[500px] relative">
                <Image loading="lazy" src={el.image} fill={true} alt="" />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Category
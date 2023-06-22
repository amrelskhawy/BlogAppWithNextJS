import Input from "@/components/Input";
import Image from "next/image";
import React from "react";
import ContactImg from "/public/contact.png"
import Button from "@/components/Button";
const Contact = () => {
  return (
    <div>
      <h1 
      className="text-5xl font-bold mb-24 text-center "
      >Let&apos;s Keep in Touch</h1>
      <div className="flex items-center relative gap-24">
        <div className="h-[500px]  flex-1 ">
          <Image
            className="w-full h-full object-contain mx-auto"
            src={ContactImg}
            alt=''
            style={{
              animation: "move 3s ease alternate infinite"
            }}
          />
        </div>
        <form className="flex-1 flex flex-col gap-5 ">
          <Input
            placeholder='Enter your Name'  />
          <Input 
            type="email"  
            placeholder='Enter your Email'
              />
          <textarea
            className="p-5 bg-transparent outline-none  text-[#bbb] border-[3px] border-[#bbb] resize-none w-full"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder='Message ..'
          ></textarea>
          <Button url="" text="Contact" />
        </form>
      </div>
    </div>
  )
}

export default Contact
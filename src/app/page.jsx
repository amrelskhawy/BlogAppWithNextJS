import Image from "next/image";
import Hero from "public/hero.png"
import Button from "@/components/Button";

export const metadata = {
    title: 'Blog App',
    description: 'Say What you want freely',
}

export default function Home() {
  return (
      <div className="grid grid-cols-2 gap-4">
        <div className="w-full flex flex-col justify-between text-left">
          <h1 className="text-7xl bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent font-bold">
            Better design for your digital products.
          </h1>
          <p className="text-2xl font-[300] ">
            Turinig your Idea into reality. We bring together the teams from the global tech industry
          </p>
          <Button url="/portfolio" text="See Our Works !"  />
        </div>
        <div className="w-full ">
          <Image className="w-[75%] mx-auto" src={Hero} alt="" style={{
              animation: "upDown 3s ease alternate infinite"
            }} />
        </div>
      </div>
  )
}
import Image from "next/image";
import Hero from "public/hero.png"
export default function Home() {
  return (
      <div className="grid grid-cols-2 gap-4 my-28">
        <div className="w-full flex flex-col justify-between text-left">
          <h1 className="text-7xl bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent font-bold">
            Better design for your digital products.
          </h1>
          <p className="text-2xl font-[300] ">
            Turinig your Idea into reality. We bring together the teams from the global tech industry
          </p>
          <button className="bg-[#53c284] p-5 cursor-pointer text-white max-w-max font-bold rounded">
            See Our Works !
          </button>
        </div>
        <div className="w-full ">
          <Image className="w-[75%] mx-auto" src={Hero} alt="" />
        </div>
      </div>
  )
}
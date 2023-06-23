import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="w-full h-[300px] relative ">
        <Image
          className="w-full h-full object-cover grayscale"
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' fill />
        <div className=" absolute bg-[#53c284] font-bold text-2xl text-white p-4 bottom-4 left-4">
          <h1 className="text-3xl">Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-12 gap-8">
        {/* Who are we? */}
        <div className="">
          <h1 className="text-3xl font-bold mb-6">Who Are We?</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae.
            <br />
            <br /> A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        {/* Who are we? */}

        {/* What We Do? */}
        <div className="">
          <h1 className="text-3xl font-bold mb-6">What We Do?</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
            <ul className="flex flex-col gap-3 my-8 mt-3">
              <li>- Creative Illustrations</li>
              <li>- Dynamic Websites</li>
              <li>- Fast and Handy</li>
              <li>- Mobile Apps</li>
            </ul>
          <Button  url="/contact" text="Contact" />
        </div>
        {/* What We Do? */}
      </div>
    </div>
  )
}

export default About
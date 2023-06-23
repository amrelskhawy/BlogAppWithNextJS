import Link from "next/link";
import React from "react";

const Portfolio = () => {
  const portfolioLinks = [
    {
      id: 1,
      title: 'Illustrations',
      path: '/portfolio/illustrations',
      imgUrl: '/illustration.png'
    },
    {
      id: 2,
      title: 'Websites',
      path: '/portfolio/websites',
      imgUrl: '/websites.jpg'
    },
    {
      id: 3,
      title: 'Application',
      path: '/portfolio/applications',
      imgUrl: '/apps.jpg'
    },
  ]
  return (
    <div>
      <h2 className="my-5 text-3xl font-bold">Choose a gallery</h2>
      <div className="flex gap-12">
        {
          portfolioLinks.map(link => (
            <Link style={{
              backgroundImage: `url('${link.imgUrl}')`
            }} className='border-[5px] bg-cover border-[#bbb] w-[300px] h-[300px] hover:text-[#53c28b] relative' href={link.path} key={link.id} >
              <span className="absolute bottom-1 right-3 text-2xl font-bold">{link.title}</span>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio
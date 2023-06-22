import Image from 'next/image'
import React from 'react'

const Footer = () => {
  const socialContact = [
    {
      id: 1,
      path: "/1.png",
      alt: 'facebook page',
      href: ''
    },
    {
      id: 2,
      path: "/2.png",
      alt: 'Instgram page',
      href: ''
    },
    {
      id: 3,
      path: "/3.png",
      alt: 'Twitter page',
      href: ''
    },
    {
      id: 4,
      path: "/4.png",
      alt: 'Youtube Channel',
      href: ''
    },
  ]
  return (
    <div className='h-12 flex items-center justify-between'>
      <div className='text-lg'>
        &copy;2023 Bloggy!. All Rights Reserved.
      </div>
      <div className='flex justify-center items-center gap-4'>
        {
          socialContact.map(ele => (
            <Image
              className='opacity-60 cursor-pointer hover:opacity-100 transition-all'
              width={20} height={20} key={`Social ${ele.id}`} src={ele.path} alt={ele.alt} />
          ))
        }
      </div>
    </div>
  )
}

export default Footer

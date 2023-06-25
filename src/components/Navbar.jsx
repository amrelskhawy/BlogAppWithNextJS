"use client"
import React  , {useContext} from 'react'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle/DarkModeToggle'

const routes = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    id: 3,
    title: "About",
    url: "/about"
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog"
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact"
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard"
  },

]

const Navbar = () => {

  return (
    <nav className='h[100px] flex justify-between items-center '>
      <Link className='font-bold  text-xl' href={'/'}>Bloggy!</Link>
      <div className='flex items-center gap-5'>
      <DarkModeToggle />
        {routes.map(link => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        )
        )}
      <button className='p-1 bg-[#53c284] text-white cursor-pointer rounded px-3 ' onClick={() => {}}>
        Logout
      </button>
      </div>
    </nav>
  )
}

export default Navbar

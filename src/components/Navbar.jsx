"use client"
import React from 'react'
import Link from 'next/link'

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
    <nav>
      <Link href={'/'}>Bloggy!</Link>
      <div>
        {routes.map(link => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        )
        )}
      </div>
      <button onClick={() => {}}>
        Logout
      </button>
    </nav>
  )
}

export default Navbar

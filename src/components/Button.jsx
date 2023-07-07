import Link from 'next/link'
import React from 'react'

const Button = ({url, text, className, ...other }) => {
  return (
          
    <Link className={`bg-[#53c284] p-5 cursor-pointer text-white max-w-max font-bold rounded ${className}`} {...other} href={url}>
        <button>
            {text}
        </button>
    </Link>
  )
}

export default Button

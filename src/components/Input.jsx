import React from 'react'

const Input = ({ title, placeholder, ...other }) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <input
        className='p-5 w-full outline-none  border-[3px] border-[#bbb] text-[#bbb] bg-transparent'
        id={title}
        placeholder={placeholder}
        {...other}
      />
    </div>
  )
}

export default Input

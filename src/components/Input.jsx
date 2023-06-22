import React from 'react'

const Input = ({ title, placeholder, type }) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <input
        className='p-5 w-full outline-none  border-[3px] border-[#bbb] text-[#bbb] bg-transparent'
        id={title}
        placeholder={placeholder}
        type={type ? type : 'text'}
      />
    </div>
  )
}

export default Input

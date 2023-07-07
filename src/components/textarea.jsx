import React from 'react'

const Textarea = ({ title, placeholder, ...other }) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <textarea
        {...other}
        className='p-5 w-full min-h-[300px] outline-none resize-none  border-[3px] border-[#bbb] text-[#bbb] bg-transparent'
        id={title}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Textarea

import React, {useContext} from 'react'
import { ThemeContext } from '@/app/context/ThemeContext'
const DarkModeToggle = () => {

  const {mode , toggle} = useContext(ThemeContext)
  return (
    <div onClick={()=> toggle()} className='flex justify-between w-[42px] h-6 border-[1.5px] border-[#53c28b70] p-[2px] cursor-pointer relative items-center rounded-[30px] transition-[300ms]'>
      <div className='text-[12px]'>🌙</div>
      <div className='text-[12px]'>🌞</div>
      <div style={mode === "light" ? {
        left: "2.5px"
      }: {right: "2.5px"}} className='w-[15px] ball  h-[15px] bg-[#53c28b] absolute  rounded-full'></div>
    </div>
  )
}

export default DarkModeToggle

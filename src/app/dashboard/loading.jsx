import React from 'react'

const Loading = () => {
  return (
    <div className={'w-full absolute top-0 left-0 z-30 bg-black/30 backdrop-blur-lg h-full flex justify-center items-center'}>
      <div style={{
          animation: 'loading 1s linear infinite'
      }} className='bg-transparent border-white border-4 border-t-transparent w-12 h-12 rounded-full'></div>
    </div>
  )
}

export default Loading

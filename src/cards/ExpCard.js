import React from 'react'

const ExpCard = (props) => {
  return (
    <div className='rounded w-[300px] h-[120px] bg-gray-300 shadow-lg'>
        <div className='rounded-t w-full h-[30px] bg-primary'></div>
        <div className='flex justify-center items-center w-full h-[90px] text-center bg-white rounded'>
            <span className='text-[17px] text-primary font-poppins'>{props.name}</span>
        </div>
    </div>
  )
}

export default ExpCard
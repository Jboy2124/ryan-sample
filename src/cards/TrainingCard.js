import React from 'react'

const TrainingCard = (props) => {
    const { name, office, date } = props
  return (
    <div className='w-[250px] h-[150px] rounded bg-gradient-to-br from-[#C6CBEF] to-[#E3E7F1] hover:shadow-lg hover:shadow-primary duration-300'>
        <div className='w-full flex justify-center items-center text-center pt-8 pb-3'>
            <span className='text-[15px] font-poppins'>{name}</span>
        </div>
        <div className='w-full flex justify-center items-center text-center'>
            <span className='text-[13px] font-poppins'>{office}</span>
        </div>
        <div className='w-full flex justify-center items-center text-center'>
            <span className='text-[12px] italic font-poppins'>{date}</span>
        </div>
    </div>
  )
}

export default TrainingCard
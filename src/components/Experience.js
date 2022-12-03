import React from 'react'
import ExpCard from '../cards/ExpCard'
import { exp } from '../constants/exp-const'

const Experience = () => {
  return (
    <div name='experience' className='bg-white'>
        <div className='container mx-auto'>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='grid grid-cols-1 gap-5 place-items-center laptop:grid-cols-2 desktop:grid-cols-2 laptop:space-x-20 desktop:space-x-20'>
                    <div className='grid mobile:grid-cols-1 tablet:grid-cols-1 laptop:grid-cols-1 grid-cols-2 gap-5'>
                        {exp.map(items => {
                          return(
                            <div key={items.id} className=''>
                                <ExpCard 
                                  name={items.name}
                                />
                            </div>
                          )
                        })}
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='rounded w-[350px] h-[400px] bg-gray-200 shadow-lg p-3'>
                            <div className='bg-gradient-to-br from-[#C6CBEF] to-[#E3E7F1] w-full h-full rounded'>
                              <div className='w-full flex justify-center items-center'>
                                  <span className='text-[60px] text-primary font-secular'>''</span>
                              </div>
                              <div className='text-center w-full px-10'>
                                  <p className='text-[28px] font-poppins'>I’m a nurse because ‘miracle worker’ isn’t an official title.</p>
                              </div>
                              <div className='text-center px-auto py-10'>
                                  <p className='text-[14px] font-poppins'>-unknown-</p>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
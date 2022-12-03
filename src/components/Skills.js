import React from 'react'
import TrainingCard from '../cards/TrainingCard'
import { trainings } from '../constants/training-const'

const Skills = () => {
  return (
    <div name='skills' className='bg-white'>
        <div className='container mx-auto'>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-3 py-10'>
                    {trainings.map(items => {
                      return(
                        <div key={items.id}>
                            <TrainingCard 
                              name={items.name}
                              office={items.office}
                              date={items.date}
                            />
                        </div>
                      )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
import React from 'react'

const Hero = () => {
  return (
    <div name='home' className='bg-backGround'>
        <div className='container mx-auto'>
            <div className='flex justify-center items-center min-h-[70vh]'>
                <span>Hero</span>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5D8BF4" fill-opacity="1" d="M0,160L34.3,133.3C68.6,107,137,53,206,64C274.3,75,343,149,411,165.3C480,181,549,139,617,154.7C685.7,171,754,245,823,245.3C891.4,245,960,171,1029,133.3C1097.1,96,1166,96,1234,96C1302.9,96,1371,96,1406,96L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    </div>
  )
}

export default Hero
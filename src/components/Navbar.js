import React from 'react'
import { menu } from '../constants/menu-const'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='bg-backGround fixed w-full'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center w-full h-[80px]'>
                <div className='text-[25px] text-primary font-poppins font-semibold'>portfolio.</div>
                <div className='flex justify-end items-center space-x-8'>
                    <div>
                        <ul className='flex justify-end items-center space-x-3 text-primary'>
                            {menu.map(items => {
                                return(
                                    <li key={items.id} className='text-[16px] font-poppins cursor-pointer hover:text-secondary duration-300'>
                                        <Link to={items.link} smooth={true} offset={-50} duration={500}>{items.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='border border-primary bg-primary hover:bg-backGround duration-300 rounded cursor-pointer'>
                        <div className='px-10 py-2 text-white text-[16px] font-poppins hover:text-primary'>Download CV</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
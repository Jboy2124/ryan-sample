import React, { useState } from 'react'
import { menu } from '../constants/menu-const'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(1)

  return (
    <div className='bg-primary fixed w-full'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center w-full h-[80px]'>
                <div className='text-[30px] text-textColor font-poppins font-semibold'>portfolio.</div>
                <div className='flex justify-end items-center space-x-8 mobile:hidden tablet:hidden'>
                    <div>
                        <ul className='flex justify-end items-center space-x-5 text-textColor'>
                            {menu.map(items => {
                                return(
                                    <li key={items.id} className='text-[16px] font-poppins cursor-pointer hover:text-secondary duration-300'>
                                        <Link to={items.link} smooth={true} offset={-50} duration={500}>{items.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='border border-secondary bg-secondary hover:bg-primary duration-300 rounded cursor-pointer'>
                        <div className='px-10 py-2 text-white text-[16px] font-poppins'>Download CV</div>
                    </div>
                </div>
                <div className='hidden mobile:block tablet:block' onClick={() => { setShowMenu(value => !value) }}>
                    <div className='text-white text-[25px] flex justify-center items-center rounded-full hover:bg-secondary p-1 duration-300'>
                        {(showMenu) ? <ion-icon name="menu-outline"></ion-icon> : <ion-icon name="close-outline"></ion-icon>}
                    </div>
                </div>
            </div>
            <div className={`laptop:hidden desktop:hidden ${(showMenu) ? 'hidden' : 'block'}`}>
                <ul className='flex flex-col justify-center items-center space-y-1 text-white text-[16px] font-poppins'>
                    {menu.map(items => {
                        return(
                            <li key={items.id} className='w-full flex justify-center items-center py-2 hover:bg-secondary duration-300'>
                                <Link to={items.link} smooth={true} offset={-50} duration={500}>{items.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className='flex justify-center items-center py-3'>
                    <div className='px-10 py-2 border border-secondary bg-secondary hover:bg-primary duration-300 rounded cursor-pointer text-[16px] text-white font-poppins'>Download CV</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
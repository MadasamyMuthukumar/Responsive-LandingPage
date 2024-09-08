import React, { useState } from 'react'
import { Menu,X } from 'lucide-react'
import logo2  from '../assets/logo5.png'
import {navItems} from '../constants'
const Navbar = () => {

    const [isMobileMenuOpen , setIsMobileMenuOpen] = useState(false)

    const toggleNavbar =()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

  return (
    /**will be sticky at top and blur in large screens */
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      {/* create container and making it center withing navbar so that, all logo and nav links will be in center*/}
     <div className='container mx-auto px-4 relative text-sm'>
        {/* additional div to center */}
        <div className='flex justify-between items-center'>
            
            {/* holding logo details */}
            <div className='flex items-center flex-shrink-0'>
                <img className='h-10 w-10 mr-2' src={logo2} alt="logo" />
                {/* tracking tigher reduce the letter spacing and hold tighlty */}
                <span className='text-xl tracking-tighter'>InnovaBuild</span>     
            </div>

            {/* nav links only visible in bigger screens
             left margin - 14 and space between items will be 12*/}
            <ul className='hidden lg:flex ml-14 space-x-12'>
                {
                    navItems.map((item,index)=>(
                        <li key={index}>
                            <a href={item.href} >{item.label}</a>
                        </li>
                    ))
                }

            </ul>

            {/* Last two buttons
            making the two buttons center */}

            <div className='hidden lg:flex justify-center items-center space-x-12'>
                <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                {/* gradient from left to right */}
                <a href="#" className='px-3 py-2 bg-gradient-to-r from-purple-700 to-purple-950 rounded-md'>
                    Create an account
                </a>
            </div>

            {/* Menu Icon 
            flex col and justif-end will not going to impact any special*/}
            <div className='lg:hidden md:flex flex-col justify-end'>
                <button onClick={toggleNavbar}>
                    {
                        isMobileMenuOpen ? <X/> : <Menu/>
                    }
                </button>
            </div>

        </div>

        {/* MOBILE VIEW NAV DROPDOWN 
        absolute to parent div , from left-0, will take full width*/}
        { isMobileMenuOpen && (
        <div className='absolute left-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>        
            <ul>
                {
                    navItems.map((item,index)=>(
                        <li key={index} className='py-4' onClick={()=>setIsMobileMenuOpen(false)}>
                            <a href={item.href} >{item.label}</a>
                        </li>
                    ))
                }
                </ul>
                
                {/* Last two buttons */}
                <div className='flex space-x-6'>
                <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                {/* gradient from left to right */}
                <a href="#" className='px-3 py-2 bg-gradient-to-r from-purple-700 to-purple-950 rounded-md'>
                    Create an account
                </a>
                </div>

        </div>
        )
        }

     </div>
    </nav>
  )
}

export default Navbar
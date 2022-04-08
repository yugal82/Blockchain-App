import React from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const NavbarItems = ({title, classProps}) => {
    return(
      <li className={`mx-4 cursor-pointer ${classProps}`}>
        {title}
      </li>
    );
}

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='w-full flex md: items-center p-4'>
      <div className='md:flex[0.5] flex-initial justify-center items-center'>
        <h2 className='text-white text-2xl font-bold'>KryptoVault</h2>
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {["Market","Exchange","Wallets"].map((items, index) => (
          <NavbarItems key={items + index} title = {items} />
        ))}
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          Login
        </li>
      </ul>
      <div className='flex relative'>
        {toggleMenu
          ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(false)} />
          : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(true)} />}
          {toggleMenu && (
            <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white'>
              <li className='text-xl w-full my-2'>
                <AiOutlineClose onClick={()=> setToggleMenu(false)} />
              </li>
              {["Market","Exchange","Wallets"].map((items, index) => (
                  <NavbarItems key={items + index} title = {items}  classProps="my-2 text-lg"/>
              ))}
            </ul>
          )}
      </div>
    </nav>
  )
}

export default Navbar
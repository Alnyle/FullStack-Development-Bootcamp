import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../constants'
import { MdMenu } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import Button from './Button';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className="sticky border bg-white top-0 py-4 z-50 backdrop-filter backdrop-blur-lg">
      <div className="max-w-5xl px-4 mx-auto relative text-base">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-2xl text-blue-600 font-bold">REFINE</span>
          </div>

          <div className="hidden md:flex items-center gap-4 font-semibold ">
            <ul className="flex flex-row gap-4">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="truncate">{item.label}</a>
                </li>
              ))}
            </ul>

            <Button paddingX= "px-3" paddingY ="py-[5px]" Content={"Contact"}/>
          </div>
          


          <div className="flex md:hidden">
            <button onClick={toggleMenu}>
              {openMenu ? <CgClose size={28}/>  :  <MdMenu size={36} /> }
            </button>
          </div>
        </div>


        {openMenu && (
          <div className="fixed right-0 z-20 w-full flex flex-col justify-center items-center md:hidden">
            <ul className="flex flex-col py-4">
              {navLinks.map((item, index) => (
                <li key={index} className="py-2">
                  <a href={item.href} >{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
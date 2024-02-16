import React from 'react'
import Logo from "../assets/brand_logo.svg";
import { FaFacebookF,FaInstagramSquare  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='bg-slate-300'>
      <div className="container py-10">
        <div className='flex flex-col justify-center items-center'>
            <img src={Logo} alt="" className='w-[200px] hover:drop-shadow-lg duration-100'/>

            <div className='flex gap-x-5'>
                <FaFacebookF size={24} className='hover:text-red-600 duration-100'/>
                <FaInstagramSquare size={24} className='hover:text-red-600 duration-100'/>
                <FaXTwitter size={24} className='hover:text-red-600 duration-100 trasi' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({color,title,icons,subtitle}) => (
  <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icons}
    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h3 className='text-white text-lg  p-1'>{title}</h3>
      <p className='text-white text-sm p-1'>{subtitle}</p>
    </div>
  </div>
)

function Services() {
  return (
    <div className='flex flex-col md:flex-row w-full justify-center items-center black-gradient '>
      <div className='flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 '>
        <div className='flex-1 flex flex-col justify-start items-start'>
          <h2 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>Services that we
            <br />
            that we continue to improve
          </h2>
          <p className='text-white py-3 leading-relaxed box-border'>The best choice for buying and selling your crypto assets, with the 
            <br />
            various super friendly services we offer.
          </p>
          <span className='text-blue-500 py-3 box-border'>LET'S GET STARTED</span>
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-start items-center mr-10'>
        <ServiceCard 
        color='bg-[#2952e3]'
        title = 'Security guaranteed.'
        icons = {<BsShieldFillCheck fontSize={21} className = 'text-white' />}
        subtitle = 'Securiy is guaranteed. We always maintain privacy and minting the quality of our products.'
         />
        <ServiceCard 
        color='bg-[#2952e3]'
        title = 'Best exchange rates.'
        icons = {<BiSearchAlt fontSize={21} className = 'text-white' />}
        subtitle = 'Securiy is guaranteed. We always maintain privacy and minting the quality of our products.'
         />
        <ServiceCard 
        color='bg-[#2952e3]'
        title = 'Fastest transactions.'
        icons = {<RiHeart2Fill fontSize={21} className = 'text-white' />}
        subtitle = 'Securiy is guaranteed. We always maintain privacy and minting the quality of our products.'
         />
      </div>
    </div>
  )
}

export default Services
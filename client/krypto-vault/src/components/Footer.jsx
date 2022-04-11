import React from 'react'

function Footer() {
  return (
    <div className='w-full flex md:justify-center justify-center items-center flex-col p-4 black-gradient'>
      <div className='w-full flex sm:flex-row flex-col justify-evenly items-center my-4'>
        <div className='flex flex-[0.5] justify-center items-center'>
          <h2 className='text-white text-2xl font-bold'>KryptoVault</h2>
        </div>
        <div className='flex flex-1 justify-center items-center flex-wrap sm:mt-0 mt-5 w-full'>
          <p className='text-white text-base text-center mx-5 cursor-pointer'>Market</p>
          <p className='text-white text-base text-center mx-5 cursor-pointer'>Exchange</p>
          <p className='text-white text-base text-center mx-5 cursor-pointer'>Wallets</p>
        </div>
      </div>
      
      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-3'></div>
      <div className='sm:w-[90%] w-full flex justify-center items-center mt-3'>
        <p className='text-white text-sm text-center font-semibold'>All rights reserved | &copy; KryptoVault 2022</p>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { Loader } from './'

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[100px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-medium text-white';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step='0.0001'
    value={value}
    onChange={(e) => handleChange(e, name)}
    className='my-2 w-full rounded-sm p-2 outline-none bg-transparent border-b border-white text-sm' />
)
function Welcome() {

  const connectWallet = () => {

  }

  const handleSubmit = () => {

  }
  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex md:flex-row flex-col items-start justify-around md:p-20 py-12 px-4'>
        <div className='flex flex-1 justify-start flex-col md:mr-10'>
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>Send Crypto <br /> around the globe!
          </h1>
          <button type='button' onClick={connectWallet} className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white font-base font-bold'>
            Connect with Wallet
          </button>
          <div className='grid grid-cols-3 w-full sm:grid-cols-3 mt-10'>
            <div className={`rounded-tl-2xl ${commonStyles}`}>Web3.0</div>
            <div className={commonStyles}>Reliability</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Blockchain</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Security</div>
            <div className={commonStyles}>Ethereum</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Low gas fees</div>
          </div>
        </div>
        <div className='flex flex-col flex-1 items-center justify-start w-full md:mt-0  mt-10 ml-20'>
          <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
            <div className='flex justify-between flex-col w-full h-full'>
              <div className='flex justify-between items-start'>
                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                  <SiEthereum fontSize={25} color='#fff' />
                </div>
                <BsInfoCircle fontSize={20} color='#fff' />
              </div>
              <div>
                <p className='text-white font-light text-sm'>Address</p>
                <p className='text-white font-medium text-lg'>Ethereum</p>
              </div>
            </div>
          </div>

          <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center white-glassmorphism'>
            <Input placeholder='Address to' name='addressTo' type='text' handleChange={() => { }} />
            <Input placeholder='Amount (ETH)' name='amount' type='number' handleChange={() => { }} />
            <Input placeholder='Keyword' name='keyword' type='text' handleChange={() => { }} />
            <Input placeholder='Message' name='message' type='text' handleChange={() => { }} />

            {false ? (
              <Loader />
            ) : (
              <button type='button' onClick={handleSubmit} className='flex flex-row justify-center items-center w-full bg-[#2952e3] mt-2 py-4 px-2 rounded-full hover:bg-[#2546bd] cursor-pointer text-white font-base font-bold'>
                Send Now
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Welcome
import React, {useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';

const TransactionCard = ({addressTo, addressFrom, message, keyword, amount,}) => {
    return (
      <div className='bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      flex-col p-3 rounded-md hover:shadow-2xl
      '>
          <div className='flex flex-col items-center w-full mt-3'>
            <div className='w-full mb-6 p-2'>
              <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} rel='noopener noreferrer' target='_blank'>
                <p className='text-white text-base my-4 border-b'>From: {shortenAddress(addressFrom)}</p>
              </a>
              <a href={`https://ropsten.etherscan.io/address/${addressTo}`} rel='noopener noreferrer' target='_blank'>
                <p className='text-white text-base my-4 border-b'>To: {shortenAddress(addressTo)}</p>
              </a>
              <p className='text-white border-b'>Amount: {amount} ETH</p>
              {message && (
                <>
                <p className='text-white text-base border-b'>Message: {message}</p>
                </>
              )}
            </div>
          </div>
      </div>
    )
}
function Transaction() {

  const {connectedAccounts} = useContext(TransactionContext)
  return (
    <div className='flex w-full justify-center items-center 2xl:px-20 black-gradient'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
        {connectedAccounts ? (<h3 className='text-white text-2xl text-center my-2'>Latest Transactions</h3>) : (<h3 className='text-white text-2xl text-center my-2'>Connect account to see your previous transactions</h3>)
        } 
        <div className='flex flex-wrap justify-center items-center mt-10'>
            {dummyData.reverse().map((transaction, i) => (
              <TransactionCard key={i} {...transaction}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Transaction  
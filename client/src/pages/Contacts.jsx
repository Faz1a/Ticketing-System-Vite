import React from 'react'
import { MdOutlineTram } from 'react-icons/md';
import { RiRefund2Line } from 'react-icons/ri';
import { GiSchoolBag } from 'react-icons/gi';

const Contacts = () => {
  return (
    <div>
      <div className="mx-auto mt-10">
        <h1 className='text-center text-4xl font-rowdies text-yellow-400'>
        Help and contact
        </h1>
        <div className="">
          <p className='text-center text-lg mt-5 w-3/4 mx-auto font-rowdies text-gray-300'>
          Do you need help buying a ticket or a travel ticket, do you want a refund for the ticket, or do you have a question about a topic related to SBB? You can find answers to your questions and find out how to contact us here on the support page.
          </p>
        </div>
      </div>
      <div className="bg-gray-300 mt-10 w-full h-[485px] flex justify-center space-x-4 font-rowdies">
        <div className="w-72 h-36 border-white border-2 mt-10 hover:bg-gray-800 hover:text-yellow-400 cursor-pointer">
          <MdOutlineTram 
          className='w-14 h-14 mt-5 mx-auto'/>
          <span className='flex justify-center mt-3 text-2xl'>
Questions about tickets</span>
        </div>
        <div className="w-72 h-36 border-white border-2 mt-10 hover:bg-gray-800 hover:text-yellow-400 cursor-pointer">
          <RiRefund2Line
          className='w-14 h-14 mt-5 mx-auto'/>
          <span className='flex justify-center mt-3 text-2xl'>Compensation</span>
        </div>
        <div className="w-72 h-36 border-white border-2 mt-10 hover:bg-gray-800 hover:text-yellow-400 cursor-pointer">
          <GiSchoolBag 
          className='w-14 h-14 mt-5 mx-auto'/>
          <span className='flex justify-center mt-3 text-2xl'>Lost stuff</span>
        </div>
      </div>
    </div>
  )
}

export default Contacts
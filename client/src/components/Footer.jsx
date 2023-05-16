import React from 'react'
import { AiFillFacebook, AiOutlineInstagram, AiFillTwitterCircle } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='bg-gray-800 h-36'>
      <div className="text-gray-400 flex justify-center space-x-10 mx-auto ">
        <div className="w-72">
          <h6 className='underline'>Help & Contact</h6>
          <p className='mt-5'>Do you have questions, need help or want to get in contact with us? We’re here to help you.</p>
        </div>
        <div className="w-72">
          <h6 className='underline'>Rail traffic information</h6>
          <p className='mt-5'>
            Find the latest information on the current service situation, information, disruptions as well as planned construction work.
          </p>
        </div>
        <div className="w-72">
          <h6 className='underline'>Newsletters & Social Media</h6>
          <p className='mt-5'>
            Our newsletter regularly informs you of attractive offers from Tramvaj.ba
          </p>
          <div className="flex space-x-2">
            <AiFillFacebook
              className='w-10 h-10' />
            <AiOutlineInstagram
              className='w-10 h-10' />
            <AiFillTwitterCircle
              className='w-10 h-10' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
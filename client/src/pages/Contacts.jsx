import React from 'react'
import { MdOutlineTram } from 'react-icons/md';
import { RiRefund2Line } from 'react-icons/ri';
import { GiSchoolBag } from 'react-icons/gi';

const Contacts = () => {
  return (
    <div>
      <div className="mx-auto mt-10">
        <h1 className='text-center text-4xl font-rowdies text-yellow-400'>
        Pomoć i kontakt
        </h1>
        <div className="">
          <p className='text-center text-lg mt-5 w-3/4 mx-auto font-rowdies'>
          Trebate li pomoć pri kupovini karte ili putne karte, želite li povrat novca za kartu ili imate pitanje o temi vezanoj za SBB? Odgovore na svoja pitanja i saznati kako da nas kontaktirate možete pronaći ovdje na stranici podrške.
          </p>
        </div>
      </div>
      <div className="bg-gray-300 mt-10 w-full h-[485px] flex justify-center space-x-4 font-rowdies">
        <div className="w-72 h-36 border-white border-2 mt-10 hover:bg-gray-800 hover:text-yellow-400 cursor-pointer">
          <MdOutlineTram 
          className='w-14 h-14 mt-5 mx-auto'/>
          <span className='flex justify-center mt-3 text-2xl'>Pitanja o kartama</span>
        </div>
        <div className="w-72 h-36 border-white border-2 mt-10 hover:bg-gray-800 hover:text-yellow-400 cursor-pointer">
          <RiRefund2Line
          className='w-14 h-14 mt-5 mx-auto'/>
          <span className='flex justify-center mt-3 text-2xl'>Kompenzacija</span>
        </div>
        <div className="w-72 h-36 border-white border-2 mt-10 hover:bg-gray-800 hover:text-yellow-400 cursor-pointer">
          <GiSchoolBag 
          className='w-14 h-14 mt-5 mx-auto'/>
          <span className='flex justify-center mt-3 text-2xl'>Izgubljeno vlasništvo</span>
        </div>
      </div>
    </div>
  )
}

export default Contacts
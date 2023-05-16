import React from 'react'
import image from '../assets/stanice.png'

const TrainStations = () => {
  return (
    <div className='bg-gray-800 h-screen'>
      <div className="flex justify-center">
        <h1 className='text-4xl mt-10 font-bold text-yellow-400 font-rowdies '>Tramvajske stanice.</h1>
      </div>
      <div className="mt-10 hover:scale-105 hover: duration-500 ">
        <img className='w-[1400px] h-[450px] mx-auto rounded-lg' src={image} alt='' />
      </div>
    </div>
  )
}

export default TrainStations
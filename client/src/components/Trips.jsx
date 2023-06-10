import React from 'react'
import tripOne from '../assets/sebilj.jpg'
import tripTwo from '../assets/sarajevo.jpg'
import tripThree from '../assets/trebevic.jpg'
import tripFour from '../assets/stojcevac5.jpg'
import tripFive from '../assets/sar.jpg'
import tripSix from '../assets/trip6.jpg'

const Trips = () => {
    return (
        <div>
            <h1 className='flex justify-center font-bold font-rowdies text-4xl mt-5 text-yellow-400'>
            Ideas for spring moments</h1>
            <div className='flex mt-2 mx-auto w-3/5 space-x-1  '>
                <div>
                    <div className='absolute bg-gray-800 w-20 hover:'>
                        <h6 className='text-white font-bold'>-30%</h6>
                    </div>
                    <img className='w-[500px] h-72' src={tripOne} alt='karta-1' />
                </div>
                <div>
                <div className='absolute bg-gray-800 w-20'>
                        <h6 className='text-white font-bold'>-20%</h6>
                    </div>
                    <img className='w-[500px] h-72' src={tripTwo} alt='karta-2'/>
                </div>
                <div>
                <div className='absolute bg-gray-800 w-20 '>
                        <h6 className='text-white font-bold'>-30%</h6>
                    </div>
                    <img className='w-[500px] h-72' src={tripThree} alt='karta-3'/>
                </div>
                
            </div>
            <div className='flex mt-2 mx-auto w-3/5 space-x-1'>
                <div>
                    <div className='absolute bg-gray-800 w-20'>
                        <h6 className='text-white font-bold '>-50%</h6>
                    </div>
                    <img className='w-[500px] h-72' src={tripFour} alt='karta-1' />
                </div>
                <div>
                <div className='absolute bg-gray-800 w-20'>
                        <h6 className='text-white font-bold'>-30%</h6>
                    </div>
                    <img className='w-[500px] h-72' src={tripFive} alt='karta-2'/>
                </div>
                <div>
                <div className='absolute bg-gray-800 w-20'>
                        <h6 className='text-white font-bold'>-20%</h6>
                    </div>
                    <img className='w-[500px] h-72' src={tripSix} alt='karta-3'/>
                </div>
                
            </div>
        </div>
    )
}

export default Trips
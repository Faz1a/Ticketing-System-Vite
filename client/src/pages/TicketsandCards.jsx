import React from 'react'
import Cards from '../components/Cards'
import imgOne from '../assets/travel1.jpg'
import imgTwo from '../assets/travel2.jpg'
import imgThree from '../assets/travel3.jpg'
import { Link, NavLink } from 'react-router-dom';

const TicketsandCards = () => {
  return (
    <div className='bg-gray-800 h-[681px]'>
      <div className="flex justify-center">
        <h1 className='text-4xl mt-10 text-yellow-400 font-rowdies'>Tickets and Cards</h1>
      </div>
      <div className="flex space-x-5 justify-center mt-10 font-rowdies ">
      <Link
        to ="/travelcards" >
      <Cards
      image={imgOne} 
      title="TRAVEL CARDS"
      description="With this card, you can travel freely on trams, buses and trains to explore everything the cities have to offer. "
      />
      </Link>
      <Link
        to ="/singleticket" >
      <Cards 
      image={imgTwo}
      title="SINGLE TICKET"
      description="Buying a ticket will give you the opportunity to experience incredible moments and create memories that will last a lifetime"
      />
      </Link>
      <Link 
      to="/preplanedtrips">
      <Cards 
      image={imgThree}
      title="PREPLAND TRIPS"
      description="Enjoy the benefits of travel without having to worry about buying individual tickets or planning routes,free walking tour."
      />
      </Link>
      </div>
    </div>
  )
}

export default TicketsandCards

/* <Link
              to="/payment"
              className="text-gray-300 mt-5 px-3 py-3 rounded-md text-base font-medium flex justify-center hover:text-yellow-300 "
            >
              Buy a Ticket
</Link>*/
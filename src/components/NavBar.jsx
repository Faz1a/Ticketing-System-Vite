import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'

const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center  h-16">
          <div className='flex'>
            <div className='flex'>
              <img className='h-14' src={logo} />
              <h1 className='text-white text-lg p-3 font-rowdies '>TRAMVAJ.BA</h1>
            </div>
            <Link
              to={"/"}
              className="text-gray-300 hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium ml-96 hover:text-yellow-300"
            >
              Home
            </Link>
            <NavLink
              to="/timetable"
              className="text-gray-300 hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium hover:text-yellow-300"
            >
              Timetable
            </NavLink>
            <NavLink
              to="/ticketsandcards"
              activeClassName="bg-gray-900 text-white"
              className="text-gray-300 hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium hover:text-yellow-300"
            >
              Tickets and Cards
            </NavLink>
            <NavLink
              to="/trainstations"
              activeClassName="bg-gray-900 text-white"
              className="text-gray-300 hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium hover:text-yellow-300"
            >
              Train stations
            </NavLink>
            <NavLink
              to="/holidays"
              activeClassName="bg-gray-900 text-white"
              className="text-gray-300 hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium hover:text-yellow-300"
            >
              Holidays
            </NavLink>
            <NavLink
              to="/contacts"
              activeClassName="bg-gray-900 text-white"
              className="text-gray-300 hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium hover:text-yellow-300"
            >
              Contacts
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

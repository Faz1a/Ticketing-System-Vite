import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import admin from '../assets/admin.png'

const AdminPannel = () => {
  return (
    <div><nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
      <div className="flex items-center  h-16">
        <div className='flex'>
          <div className='flex'>
            <img className='h-14' src={admin} />
            <h1 className='text-white text-lg p-3 font-rowdies '>Admin Panel</h1>
          </div>
          <Link
            to="/dashboard"
            className="text-gray-300 hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium ml-96 hover:text-yellow-300"
          >
            Dashboard
          </Link>
          <NavLink
            to="/adminpayment"
            className="text-gray-300 hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium hover:text-yellow-300"
          >
            Payment order type
          </NavLink>
          <NavLink
            to="/fields"
            activeClassName="bg-gray-900 text-white"
            className="text-gray-300 hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium hover:text-yellow-300"
          >
            Fields
          </NavLink>
          <NavLink
            to="/tenant"
            activeClassName="bg-gray-900 text-white"
            className="text-gray-300 hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium hover:text-yellow-300"
          >
            Tenant
          </NavLink>
        </div>
      </div>
    </div>
  </nav></div>
  )
}

export default AdminPannel
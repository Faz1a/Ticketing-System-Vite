import React from 'react'
import { Link, } from 'react-router-dom';
import axios from 'axios'
import {useState, useEffect} from 'react'

const api  =  axios.create({
  baseURL: 'http://127.0.0.1:5000/preplanned-trips'
})


const PreplanedTrips = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    api.get('').then(res => {
      console.log(res.data);
      setData(res.data)
    });
  }, []);


  return (
    <div>
    <div className="flex justify-center mt-20 h-[601px]">
      <div>
        <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                  >
                    NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                  >
                    DESCRIPTION
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                  >
                    DURATION
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                  >
                    PRICE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                  >
                    START
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                  >
                    FINISH
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                  >
                    STOPS
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item) => (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      {item.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">{item.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      {item.duration} DAYS
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      {item.price} KM
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      {item.starting_destination}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      {item.final_destination}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      {item.stops} Towns Visited
                    </div>
                  </td>
                  <td>
                    {" "}
                    <Link to="/payment">
                      <button className="bg-yellow-300 text-white py-2 px-4 mr-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Buy Ticket
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PreplanedTrips
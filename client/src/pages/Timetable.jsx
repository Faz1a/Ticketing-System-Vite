import React from 'react'

const Timetable = () => {
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
                    ROUTE ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                  >
                    TRAIN ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                  >
                    DEPARTURE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                  >
                    ARRIVAL
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                  >
                    STATION
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                  >
                    DEPARTURE TIME
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      ///////////////
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">////////////</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      /////////////////////////
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      /////////////////////////
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      /////////////////////////
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      /////////////////////////
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Timetable
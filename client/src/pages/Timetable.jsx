import axios from 'axios'
import React, {useState, useEffect} from 'react'

const api  =  axios.create({
  baseURL: 'http://127.0.0.1:5000/schedules'
})

const Timetable = () => {

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
                    DEPARTURE TIME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                  >
                    ARRIVAL TIME
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item) => (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      {item.route_id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">{item.train_id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                    {item.departure_station_id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                    {item.arrival_station_id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      {item.departure_time}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-bold">
                      {item.arrival_time}
                    </div>
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

export default Timetable
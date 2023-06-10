import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:5000"

export function TrainRoute(){
    const [starting_station_id, setStarting_station_id] = useState("")
    const [destination_station_id, setDestination_station_id] = useState("")
    const [train_id, setTrain_id] = useState("")
    const [departure_time, setDeparture_time] = useState("")
    const [arrival_time, setArrival_time ]= useState("")
    const [distance, setDistance] = useState("")
    const [type, setType] = useState("")
    const [status, setStatus] = useState("")
    const [eventList, setEventsList] = useState([])

    const handelChangeStarting_station_id = e =>{
      setStarting_station_id(e.target.value);
    }

    const handelChangeDestination_station_id = e =>{
      setDestination_station_id(e.target.value);
    }

    const handleChangeTrain_id = (e) => {
      setTrain_id(e.target.value);
    }
    
    const handleChangeDeparture_time = (e) => {
      setDeparture_time(e.target.value);
    }
    
    const handleChangeArrival_time = (e) => {
      setArrival_time(e.target.value);
    }
    
    
    const handleChangeDistance = (e) => {
      setDistance(e.target.value);
    }
    
    const handleChangeType = (e) => {
      setType(e.target.value);
    }
    
   
    const handleChangeStatus = (e) => {
      setStatus(e.target.value);
    }
    

    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        const data = await axios.post(`${baseUrl}/route`, {starting_station_id,train_id,departure_time,arrival_time,distance,type,destination_station_id,status})
        setEventsList([...eventList, data.data]);
        setStarting_station_id('');
        setTrain_id('');
        setDeparture_time('');
        setArrival_time('');
        setDistance('');
        setType('');
        setDestination_station_id('');
        setStatus('');
        
      } catch (error) {
        console.error(error.message)
      }
    }

    return (
    <div className="bg-slate-700 px-3 pb-2 pt-2 h-screen ">
      <h1 className="text-white text-xl pl-5 flex justify-center">Routes</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <label className="text-white p-4 flex justify-between">Starting destination ID
          <input
            onChange={handelChangeStarting_station_id}
            type="number"
            id="starting_station_id"
            name="starting_station_id"
            value={starting_station_id}
            class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>

        <label className="text-white p-4 flex justify-between">Destination station ID
        <input
          onChange={handelChangeDestination_station_id}
          type="number"
          id="destination_station_id"
          name="destination_station_id"
          value={destination_station_id}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>


        <label className="text-white p-4 flex justify-between">Train ID
        <input
          onChange={handleChangeTrain_id}
          type="number"
          id="train_id"
          name="train_id"
          value={train_id}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Departure time
        <input
          onChange={handleChangeDeparture_time}
          type="time"
          id="departure_time"
          name="departure_time"
          value={departure_time}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Arrival time
        <input
          onChange={handleChangeArrival_time}
          type="time"
          id="arrival_time"
          name="arrival_time"
          value={arrival_time}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Distance
        <input
          onChange={handleChangeDistance}
          type="number"
          id="distance"
          name="distance"
          value={distance}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Status
        <input
          onChange={handleChangeStatus}
          type="text"
          id="status"
          name="status"
          value={status}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Type
        <input
          onChange={handleChangeType}
          type="text"
          id="type"
          name="type"
          value={type}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>


        

        <label className="flex justify-end">
        <button type="submit" className="bg-yellow-300 text-white rounded-sm w-20 h-8 ">
          Submit
        </button>
        </label>
      </form>
      
    </div>
  );
};

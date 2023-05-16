import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:5000"

export function Schedule(){
    const [route_id, setRoute_id] = useState("")
    const [train_id, setTrain_id] = useState("")
    const [departure_station_id, setDeparture_station_id] = useState("")
    const [arrival_station_id, setArrival_station_id] = useState("")
    const [stops, setStops ]= useState("")
    const [departure_time, setDeparture_time] = useState("")
    const [arrival_time, setArrival_time] = useState("")
    const [frequency, setFrequency] = useState("")
    const [eventList, setEventsList] = useState([])


    const handelChangeRoute_id = e =>{
      setRoute_id(e.target.value);
    }
    const handleChangeTrain_id = (e) => {
      setTrain_id(e.target.value);
    }
    const handleChangeDeparture_station_id = (e) => {
      setDeparture_station_id(e.target.value);
    }
    const handleChageArrival_station_id = (e) => {
      setArrival_station_id(e.target.value);
    }
    const handleChageStops = (e) => {
      setStops(e.target.value);
    }

    const handelChangeDeaprture_time = e =>{
      setDeparture_time(e.target.value);
    }
    const handleChangeArrival_time = (e) => {
      setArrival_time(e.target.value);
    } 
    const handleChangeFrequency = (e) => {
      setFrequency(e.target.value);
    }




    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        const data = await axios.post(`${baseUrl}/schedule`, {route_id, train_id, departure_station_id, arrival_station_id, stops, departure_time, arrival_time, frequency})
        setEventsList([...eventList, data.data]);
        setRoute_id('');
        setTrain_id('');
        setDeparture_station_id('');
        setArrival_station_id('');
        setStops('');
        setDeparture_time('');
        setArrival_station_id('');
        setFrequency('');

      } catch (error) {
        console.error(error.message)
      }
    }

    return (
    <div className="bg-slate-700 px-3 pb-2 pt-2  ">
      <h1 className="text-white text-xl pl-5">Schedule</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <label className="p-4">Route ID
          <input
            onChange={handelChangeRoute_id}
            type="number"
            id="route_id"
            name="route_id"
            value={route_id}
            class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>

        <label className="p-4">Train ID
        <input
          onChange={handleChangeTrain_id}
          type="number"
          id="train_id"
          name="train_id"
          value={train_id}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>


        <label className="p-4">Departure station ID
        <input
          onChange={handleChangeDeparture_station_id}
          type="number"
          id="departure_station_id"
          name="departure_station_id"
          value={departure_station_id}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Arrival station ID
        <input
          onChange={handleChageArrival_station_id}
          type="time"
          id="arrival_station_id"
          name="arrival_station_id"
          value={arrival_station_id}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Stops
        <input
          onChange={handleChageStops}
          type="text"
          id="stops"
          name="stops"
          value={stops}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Departure time
        <input
          onChange={handelChangeDeaprture_time}
          type="time"
          id="departure_time"
          name="departure_time"
          value={departure_time}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Arrival time
        <input
          onChange={handleChangeArrival_time}
          type="time"
          id="arrival_time"
          name="arrival_time"
          value={arrival_time}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>


        <label className="p-4">Frequency
        <input
          onChange={handleChangeFrequency}
          type="number"
          id="frequency"
          name="frequency"
          value={frequency}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>



        <button type="submit" className="bg-sky-500 text-white rounded-sm w-20 h-8">
          Submit
        </button>
      </form>

    </div>
  );
};
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {format} from "date-fns";

const baseUrl = "http://localhost:5000"

export function Preplanned_Trip(){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [starting_destination, setStartingDestination] = useState("")
    const [final_destination, setFinalDestination] = useState("")
    const [departure_station_id, setDepartuteStationId] = useState("")
    const [arrival_station_id, setArrivalStationId] = useState("")
    const [duration, setDuration] = useState("")
    const [number_of_seats, setNumberOfSeats] = useState("")
    const [booked_seats, setBookedSeats] = useState("")
    const [train_id, setTrainId] = useState("")
    const [route_id, setRouteId] = useState("")
    const [start_date, setStartDate] = useState("")
    const [end_date, setEndDate] = useState("")
    const [price, setPrice] = useState("")
    const [is_active, setIsActive] = useState("")
    const [stops, setStops] = useState("")
    const [eventList, setEventsList] = useState([])

    const handelChangeName = e =>{
      setName(e.target.value);
    }

    const handelChangeDescription = e =>{
      setDescription(e.target.value);
    }

    const handleChangeStartingDestination = (e) => {
      setStartingDestination(e.target.value);
    }
    
    const handleChangeFinalDestination = (e) => {
      setFinalDestination(e.target.value);
    }
    
    const handleChangeDepartuteStationId = (e) => {
      setDepartuteStationId(e.target.value);
    }
    
    const handleChangeArrivalStationId = (e) => {
      setArrivalStationId(e.target.value);
    }
    
    const handleChangeDuration = (e) => {
      setDuration(e.target.value);
    }
    
    const handleChangeNumberOfSeats = (e) => {
      setNumberOfSeats(e.target.value);
    }
    
    const handleChangeBookedSeats = (e) => {
      setBookedSeats(e.target.value);
    }
    
    const handleChangeTrainId = (e) => {
      setTrainId(e.target.value);
    }
    
    const handleChangeRouteId = (e) => {
      setRouteId(e.target.value);
    }
    
    const handleChangeStartDate = (e) => {
      setStartDate(e.target.value);
    }
    
    const handleChangeEndDate = (e) => {
      setEndDate(e.target.value);
    }
    
    const handleChangePrice = (e) => {
      setPrice(e.target.value);
    }
    
    const handleChangeIsActive = (e) => {
      setIsActive(e.target.value);
    }
    
    const handleChangeStops = (e) => {
      setStops(e.target.value);
    }
    

    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        const data = await axios.post(`${baseUrl}/preplanned-trips`, {name, description, start_date, 
          end_date, starting_destination, final_destination,departure_station_id, arrival_station_id, 
          stops, duration, price, is_active, number_of_seats, booked_seats, train_id, route_id})
        setEventsList([...eventList, data.data]);
        setName('');
        setDescription('');
        setStartingDestination('');
        setFinalDestination('');
        setDepartuteStationId('');
        setArrivalStationId('');
        setDuration('');
        setNumberOfSeats('');
        setBookedSeats('');
        setTrainId('');
        setRouteId('');
        setStartDate('');
        setEndDate('');
        setPrice('');
        setIsActive('');
        setStops('');
      } catch (error) {
        console.error(error.message)
      }
    }

    return (
    <div className="bg-slate-700 px-3 pb-2 pt-2 ">
      <h1 className="text-white text-xl pl-5 flex justify-center">Ticketing System Preplanned</h1>
      <form action="submit" onSubmit={handleSubmit}>
      
       <label className=" text-white p-5 flex justify-between">Name
          <input
            onChange={handelChangeName}
            type="text"
            id="name"
            name="name"
            value={name}
            class="w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>


        <label className="text-white p-4 flex justify-between ">Description
        <input
          onChange={handelChangeDescription}
          type="text"
          id="description"
          name="description"
          value={description}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Starting Destination
        <input
          onChange={handleChangeStartingDestination}
          type="text"
          id="starting_destination"
          name="starting_destination"
          value={starting_destination}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Final Destination
        <input
          onChange={handleChangeFinalDestination}
          type="text"
          id="final_destination"
          name="final_destination"
          value={final_destination}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Departure Station ID
        <input
          onChange={handleChangeDepartuteStationId}
          type="number"
          id="departure_station_id"
          name="departure_station_id"
          value={departure_station_id}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Arrival Station ID
        <input
          onChange={handleChangeArrivalStationId}
          type="number"
          id="arrival_station_id"
          name="arrival_station_id"
          value={arrival_station_id}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Duration
        <input
          onChange={handleChangeDuration}
          type="number"
          id="duration"
          name="duration"
          value={duration}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Number of Seats
        <input
          onChange={handleChangeNumberOfSeats}
          type="number"
          id="number_of_seats"
          name="number_of_seats"
          value={number_of_seats}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Booked Seats
        <input
          onChange={handleChangeBookedSeats}
          type="number"
          id="booked_seats"
          name="booked_seats"
          value={booked_seats}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Train ID
        <input
          onChange={handleChangeTrainId}
          type="number"
          id="train_id"
          name="train_id"
          value={train_id}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Route ID
        <input
          onChange={handleChangeRouteId}
          type="number"
          id="route_id"
          name="route_id"
          value={route_id}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Start Date
        <input
          onChange={handleChangeStartDate}
          type="date"
          id="start_date"
          name="start_date"
          value={start_date}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">End Date
        <input
          onChange={handleChangeEndDate}
          type="date"
          id="end_date"
          name="end_date"
          value={end_date}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Price
        <input
          onChange={handleChangePrice}
          type="number"
          id="price"
          name="price"
          value={price}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Is Active
        <input
          onChange={handleChangeIsActive}
          type="checkbox"
          id="is_active"
          name="is_active"
          value="true"
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Stops
        <input
          onChange={handleChangeStops}
          type="number"
          id="stops"
          name="stops"
          value={stops}
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


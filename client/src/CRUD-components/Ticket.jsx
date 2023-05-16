import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:5000"

export function Ticket(){
    const [type, setType] = useState("")
    const [price, setPrice] = useState("")
    const [train_id, setTrain_id] = useState("")
    const [route_id, setRoute_id] = useState("")
    const [duration, setDuration ]= useState("")
    const [eventList, setEventsList] = useState([])
   


    const handelChangeType = e =>{
      setType(e.target.value);
    }
    const handleChangePrice = (e) => {
      setPrice(e.target.value);
    }
    const handleChangeTrain_id = (e) => {
      setTrain_id(e.target.value);
    }
    const handelChangeRoute_id = (e) => {
      setRoute_id(e.target.value);
    }
    const handleChangeDuration = (e) => {
      setDuration(e.target.value);
    }
    
    
    
    
    

    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        const data = await axios.post(`${baseUrl}/ticket`, {type,price,route_id,train_id,duration})
        setEventsList([...eventList, data.data]);
        setType('');
        setPrice('');
        setRoute_id('');
        setTrain_id('');
        setDuration('');
        
      } catch (error) {
        console.error(error.message)
      }
    }

    return (
    <div className="bg-slate-700 px-3 pb-2 pt-2 ">
      <h1 className="text-white text-xl pl-5">Tickets</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <label className="p-4">Type
          <input
            onChange={handelChangeType}
            type="text"
            id="type"
            name="type"
            value={type}
            class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>

        <label className="p-4">Price
        <input
          onChange={handleChangePrice}
          type="number"
          id="price"
          name="price"
          value={price}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>


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

        <label className="p-4">Duration
        <input
          onChange={handleChangeDuration}
          type="number"
          id="duration"
          name="duration"
          value={duration}
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

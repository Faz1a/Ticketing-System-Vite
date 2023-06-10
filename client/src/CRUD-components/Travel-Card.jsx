import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:5000"

export function TravelCard(){
    const [name, setName] = useState("")
    const [duration, setDuration] = useState("")
    const [start_date, setStart_date] = useState("")
    const [end_date, setEnd_date] = useState("")
    const [is_active, setIs_active ]= useState("")
    const [price, setPrice ]= useState("")
    const [eventList, setEventsList] = useState([])
   


  
    const handleChangeName = (e) => {
      setName(e.target.value);
    }
    const handleChangeDuration = (e) => {
      setDuration(e.target.value);
    }
    const handleChangeStart_date = (e) => {
      setStart_date(e.target.value);
    }
    const handleChangeEnd_date = (e) => {
      setEnd_date(e.target.value);
    }
    const handleChangeIs_active = (e) => {
      setIs_active(e.target.value);
    }
    const handleChangePrice = (e) => {
      setPrice(e.target.value);
    }
    
    
    
    
    

    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        const data = await axios.post(`${baseUrl}/travel-card`, {name,price,start_date,end_date,duration,is_active})
        setEventsList([...eventList, data.data]);
        setPrice('');
        setName('');
        setDuration('');
        setIs_active('');
        setStart_date('');
        setEnd_date('');
        
      } catch (error) {
        console.error(error.message)
      }
    }

    return (
    <div className="bg-slate-700 px-3 pb-2 pt-2 h-screen">
      <h1 className="text-white text-xl pl-5 flex justify-center">Travel cards</h1>
      
      <form action="submit" onSubmit={handleSubmit}>
        <label className="text-white p-4 flex justify-between">Name
          <input
            onChange={handleChangeName}
            type="text"
            id="name"
            name="name"
            value={name}
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


        <label className="text-white p-4 flex justify-between">Start date
        <input
          onChange={handleChangeStart_date}
          type="date"
          id="start_date"
          name="tart_date"
          value={start_date}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">End date
        <input
          onChange={handleChangeEnd_date}
          type="date"
          id="end_date"
          name="end_date"
          value={end_date}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Is Active
        <input
          onChange={handleChangeIs_active}
          type="checkbox"
          id="is_active"
          name="is_active"
          value="true"
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



        
        <label className="flex justify-end">
        <button type="submit" className="bg-yellow-300 text-white rounded-sm w-20 h-8 ">
          Submit
        </button>
        </label>
      </form>
      
    </div>
  );
};

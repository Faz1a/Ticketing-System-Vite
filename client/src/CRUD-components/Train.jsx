import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:5000"

export function Train(){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [type, setType] = useState("")
    const [capacity, setCapacity] = useState("")
    const [status, setStatus ]= useState("")
    const [eventList, setEventsList] = useState([])
   


    const handleChangeType = e =>{
      setType(e.target.value);
    }
    const handleChangeName = (e) => {
      setName(e.target.value);
    }
    const handleChangeDescription = (e) => {
      setDescription(e.target.value);
    }
    const handleChangeCapacity = (e) => {
      setCapacity(e.target.value);
    }
    const handleChageStatus = (e) => {
      setStatus(e.target.value);
    }
    
    
    
    
    

    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        const data = await axios.post(`${baseUrl}/train`, {type,capacity,name,description,status})
        setEventsList([...eventList, data.data]);
        setType('');
        setName('');
        setCapacity('');
        setStatus('');
        setDescription('');
        
      } catch (error) {
        console.error(error.message)
      }
    }

    return (
    <div className="bg-slate-700 px-3 pb-2 pt-2 h-screen">
      <h1 className="text-white text-xl pl-5 flex justify-center">Trains</h1>
      <form action="submit" onSubmit={handleSubmit}>
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

        <label className="text-white p-4 flex justify-between">Capacity
        <input
          onChange={handleChangeCapacity}
          type="number"
          id="capacity"
          name="capacity"
          value={capacity}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>


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

        <label className="text-white p-4 flex justify-between">Description
        <input
          onChange={handleChangeDescription}
          type="text"
          id="description"
          name="description"
          value={description}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Status
        <input
          onChange={handleChageStatus}
          type="text"
          id="status"
          name="status"
          value={status}
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

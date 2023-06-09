import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:5000"

export function Service(){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [is_active, setIs_active] = useState("")
    const [employee_id, setEmployee_id ]= useState("")
    const [eventList, setEventsList] = useState([])


    const handelChangeName = e =>{
      setName(e.target.value);
    }
    const handleChangeDescription = (e) => {
      setDescription(e.target.value);
    }
    const handleChangePrice = (e) => {
      setPrice(e.target.value);
    }
    const handleChageIs_active = (e) => {
      setIs_active(e.target.value);
    }
    const handleChageEmployee_id = (e) => {
      setEmployee_id(e.target.value);
    }
    
    
    

    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        const data = await axios.post(`${baseUrl}/services`, {name,description,price,is_active,employee_id})
        setEventsList([...eventList, data.data]);
        setName('');
        setDescription('');
        setPrice('');
        setIs_active('');
        setEmployee_id('');
        
      } catch (error) {
        console.error(error.message)
      }
    }

    return (
    <div className="bg-slate-700 px-3 pb-2 pt-2 h-screen ">
      <h1 className="text-white text-xl pl-5 flex justify-center">Services</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <label className="text-white p-4 flex justify-between">Name
          <input
            onChange={handelChangeName}
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
          onChange={handleChageIs_active}
          type="checkbox"
          id="is_active"
          name="is_active"
          value="true"
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="text-white p-4 flex justify-between">Employee ID
        <input
          onChange={handleChageEmployee_id}
          type="number"
          id="employee_id"
          name="employee_id"
          value={employee_id}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        
        <label className="flex justify-end">
        <button type="submit" className="bg-yellow-300 text-white rounded-sm w-20 h-8">
          Submit
        </button>
        </label>
      </form>
      
    </div>
  );
};

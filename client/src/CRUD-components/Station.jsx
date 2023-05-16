import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:5000"

export function Station(){
    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [address, setAddress] = useState("")
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude ]= useState("")
    const [is_active, setIs_active] = useState("")
    const [eventList, setEventsList] = useState([])


    const handelChangeName = e =>{
      setName(e.target.value);
    }
    const handleChangeCode = (e) => {
      setCode(e.target.value);
    }
    const handleChangeAddress = (e) => {
      setAddress(e.target.value);
    }
    const handleChangeLongitude = (e) => {
      setLongitude(e.target.value);
    }
    const handleChangeLatitude = (e) => {
      setLatitude(e.target.value);
    }
    const handleChangeIs_active = (e) => {
      setIs_active(e.target.value);
    }
    
    
    
    

    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        const data = await axios.post(`${baseUrl}/stations`, {name,code,address,longitude,latitude,is_active,})
        setEventsList([...eventList, data.data]);
        setName('');
        setCode('');
        setLatitude('');
        setIs_active('');
        setLongitude('');
        setAddress('');
        
      } catch (error) {
        console.error(error.message)
      }
    }

    return (
    <div className="bg-slate-700 px-3 pb-2 pt-2 ">
      <h1 className="text-white text-xl pl-5">Services</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <label className="p-4">Name
          <input
            onChange={handelChangeName}
            type="text"
            id="name"
            name="name"
            value={name}
            class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>

        <label className="p-4">Code
        <input
          onChange={handleChangeCode}
          type="text"
          id="code"
          name="code"
          value={code}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>


        <label className="p-4">Address
        <input
          onChange={handleChangeAddress}
          type="text"
          id="address"
          name="address"
          value={address}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Longitude
        <input
          onChange={handleChangeLongitude}
          type="text"
          id="longitude"
          name="logitude"
          value={longitude}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Latitude
        <input
          onChange={handleChangeLatitude}
          type="text"
          id="latitude"
          name="latitude"
          value={latitude}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Is active
        <input
          onChange={handleChangeIs_active}
          type="number"
          id="is_active"
          name="is_active"
          value={is_active}
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

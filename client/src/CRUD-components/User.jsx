import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:5000"

export function User(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [date_of_birth, setDate_of_birth ]= useState("")
    const [phone_number, setPhone_number ]= useState("")
    const [role, setRole ]= useState("")
    const [eventList, setEventsList] = useState([])
   


  
    const handleChangeName = (e) => {
      setName(e.target.value);
    }
    const handleChangeEmail = (e) => {
      setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
      setPassword(e.target.value);
    }
    const handleChangeAddress = (e) => {
      setAddress(e.target.value);
    }
    const handleChangeDate_od_birth = (e) => {
      setDate_of_birth(e.target.value);
    }
    const handleChangePhone_number = (e) => {
      setPhone_number(e.target.value);
    }
    const handleChangeRole = (e) => {
      setRole(e.target.value);
    }
    
    
    
    

    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        const data = await axios.post(`${baseUrl}/user`, {name,email,password,date_of_birth,phone_number,role,address})
        setEventsList([...eventList, data.data]);
        setName('');
        setEmail('');
        setPassword('');
        setAddress('');
        setDate_of_birth('');
        setPhone_number('');
        setRole('');
        
      } catch (error) {
        console.error(error.message)
      }
    }

    return (
    <div className="bg-slate-700 px-3 pb-2 pt-2 ">
      <h1 className="text-white text-xl pl-5">Travel cards</h1>
      
      <form action="submit" onSubmit={handleSubmit}>
        <label className="p-4">Name
          <input
            onChange={handleChangeName}
            type="text"
            id="name"
            name="name"
            value={name}
            class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>

        <label className="p-4">E-mail
        <input
          onChange={handleChangeEmail}
          type="text"
          id="email"
          name="email"
          value={email}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>


        <label className="p-4">Password
        <input
          onChange={handleChangePassword}
          type="text"
          id="password"
          name="password"
          value={password}
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
        <label className="p-4">Date of birth
        <input
          onChange={handleChangeDate_od_birth}
          type="date"
          id="date_of_birth"
          name="date_of_birth"
          value={date_of_birth}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Phone number
        <input
          onChange={handleChangePhone_number}
          type="number"
          id="phone_number"
          name="phone_number"
          value={phone_number}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Role
        <input
          onChange={handleChangeRole}
          type="text"
          id="role"
          name="role"
          value={role}
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

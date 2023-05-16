import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import httpClient from "../httpClient";



export function Registration(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [date_of_birth, setDateOfBirth] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [role, setRole] = useState("")

   const registerUser = async () => {

      try {
        const resp = await httpClient.post("//localhost:5000/register", {
        name,
        email,
        password,
        address,
        date_of_birth,
        phone_number,
        role
      });

      window.location.href = '/'
      } catch (error) {
         if (error.response.status === 401){
            alert("Invalid Credentials");
         }
      }
   }
   
   return (
      <div className="bg-slate-700 px-3 pb-2 pt-2 ">
      <h1 className="text-white text-xl pl-5">Create an account</h1>
      <form>
      <label className="p-4">Name
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            value={name}
            class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>
        <label className="p-4">Email
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            value={email}
            class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>

        <label className="p-4">Password
          <input
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            id='password'
            name="pasword"
            class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>

        <label className="p-4">Date of Birth
          <input
            type="date" 
            value={date_of_birth} 
            onChange={(e) => setDateOfBirth(e.target.value)} 
            id="date_of_birth"
            name="date_of_birth"
            class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>

        <label className="p-4">Phone Number
          <input
            type="text" 
            value={phone_number} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            id="phone_number"
            name="phone_number"
            class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>

        <label className="p-4">Address
          <input
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            id='address'
            name="address"
            class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>
        
        

        <button type="button" onClick={() => registerUser()} className="bg-sky-500 text-white rounded-sm w-20 h-8">
          Submit
        </button>
      </form>
      </div>
    )
  }
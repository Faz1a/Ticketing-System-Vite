import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import httpClient from "../httpClient";



export function Login(){
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const logInUser = async () => {
      console.log(email, password);

      try {
         const resp = await httpClient.post("//localhost:5000/login", {
         email,
         password,
      });

      window.location.href = '/'
      } catch (error) {
         if (error.response.status === 401){
            alert("Invalid Credentials");
         }
      }
   }
   
   return (
      <div className="bg-slate-700 h-[1102px] p-46">
      <h1 className="text-white text-xl pl-5">Log Into You Account</h1>
      <form>
        <label className="p-4 ">Email
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

        <button type="button" onClick={() => logInUser()} className="bg-sky-500 text-white rounded-sm w-20 h-8">
          Submit
        </button>
      </form>
      </div>
    )
  }
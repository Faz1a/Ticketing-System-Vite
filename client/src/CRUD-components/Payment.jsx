import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:5000"

export function Payment(){
    const [user_id, setUser_id] = useState("")
    const [booking_id, setBooking_id] = useState("")
    const [payment_method, setPayment_method] = useState("")
    const [amount, setAmount] = useState("")
    const [currency, setCurrency] = useState("")
    const [status, setStatus] = useState("")
    const [transaction_id, setTransaction_id] = useState("")
    const [payment_gateway, setPayment_gateway] = useState("")
    const [eventList, setEventsList] = useState([])
    
    

    const handelChangeUser_id = e =>{
      setUser_id(e.target.value);
    }

    const handleChangeBooking_id = (e) => {
      setBooking_id(e.target.value);
    }
    
    const handleChangePayment_method = (e) => {
      setPayment_method(e.target.value);
    }
    
    const handleChangeAmount = (e) => {
      setAmount(e.target.value);
    }
    
    const handleChangeCurrency = (e) => {
      setCurrency(e.target.value);
    }
    
    const handleChangeTransaction_id = (e) => {
      setTransaction_id(e.target.value);
    }
    
    const handleChangePayment_gateway = (e) => {
      setPayment_gateway(e.target.value);
    }
    
    
    

    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        const data = await axios.post(`${baseUrl}/payment`, { user_id, booking_id, payment_method, amount, currency, status, transaction_id, payment_gateway})
        setEventsList([...eventList, data.data]);
       
        setUser_id('');
        setBooking_id('');
        setPayment_method('');
        setAmount('');
        setCurrency('');
        setStatus('');
        setTransaction_id('');
        setPayment_gateway('');
      } catch (error) {
        console.error(error.message)
      }
    }

    return (
    <div className="bg-slate-700 px-3 pb-2 pt-2 ">
      <h1 className="text-white text-xl pl-5">Payment</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <label className="p-4">User id
          <input
            onChange={handelChangeUser_id}
            type="number"
            id="user_id"
            name="user_id"
            value={user_id}
            class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>

        <label className="p-4">Booking id
        <input
          onChange={handleChangeBooking_id}
          type="number"
          id="booking_id"
          name="booking_id"
          value={booking_id}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Payment method
        <input
          onChange={handleChangePayment_method}
          type="text"
          id="payment_method"
          name="payment_method"
          value={payment_method}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Amount
        <input
          onChange={handleChangeAmount}
          type="text"
          id="amount"
          name="amount"
          value={amount}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Currency
        <input
          onChange={handleChangeCurrency}
          type="text"
          id="currency"
          name="currency"
          value={currency}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Status
        <input
          onChange={handleChangeStatus}
          type="number"
          id="status"
          name="status"
          value={status}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Transaction ID
        <input
          onChange={handleChangeTransaction_id}
          type="number"
          id="transaction_id"
          name="transaction_id"
          value={transaction_id}
          class=" w-1/2 h-10 mr-96 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </label>

        <label className="p-4">Paymentgateway
        <input
          onChange={handleChangePayment_gateway}
          type="text"
          id="payment_gateway"
          name="payment_gateway"
          value={payment_gateway}
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

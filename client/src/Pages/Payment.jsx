import React, { useState} from 'react';
import axios from "axios";

const baseUrl = "http://localhost:5000"

const Payment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [card_number, setCardNumber] = useState("");
  const [expiration_date, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [eventList, setEventsList] = useState([])
  const amount = 20;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const data = await axios.post(`${baseUrl}/checkout`, {name, email, card_number, expiration_date, cvv,amount})
      console.log(name, email, card_number, expiration_date, cvv,amount)
      setEventsList([...eventList, data.data]);
      setName('');
      setEmail('');
      setCardNumber('');
      setExpirationDate('');
      setCvv('');

    } catch (error) {
      console.error(error.message)
    }
    window.location.href = '/'
  };

  return (
    <div className='h-[1102px]'>
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow-md">
      <h2 className="text-xl mb-4">Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="card_number" className="block mb-2 text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            id="card_number"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={card_number}
            onChange={handleCardNumberChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="expiration_date" className="block mb-2 text-sm font-medium text-gray-700">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiration_date"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={expiration_date}
            onChange={handleExpirationDateChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cvv" className="block mb-2 text-sm font-medium text-gray-700">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={cvv}
            onChange={handleCvvChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-300 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Payment;

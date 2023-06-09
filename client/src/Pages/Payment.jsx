import React, { useState } from 'react';

const Payment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className='h-[601px]'>
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
            type="email"
            id="email"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block mb-2 text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="expiryDate" className="block mb-2 text-sm font-medium text-gray-700">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={expiryDate}
            onChange={handleExpiryDateChange}
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

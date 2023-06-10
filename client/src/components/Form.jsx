import axios from 'axios'
import React, {useState, useEffect} from 'react'

const api  =  axios.create({
  baseURL: 'http://127.0.0.1:5000/stations'
})

const Form = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    api.get('').then(res => {
      console.log(res.data);
      setData(res.data)
    });
  }, []);

    return (
      <div className="mt-5  ">
        <label className="flex justify-center space-x-1">
          
          <select
            className=" h-10  text-yellow-400 text-center bg-gray-800 border-gray-300 rounded-md shadow-sm  focus:border-yellow-400  focus:ring  focus:ring-yellow-500 "
            name="station"
          >
            <option value="0">Select Station</option>
            {data.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
          <label>
            <h1 className='mt-2 text-white'>to</h1>
          </label>
          <select
            className=" h-10 text-yellow-400 text-center bg-gray-800 border-gray-300 rounded-md shadow-sm  focus:border-yellow-400  focus:ring  focus:ring-yellow-500 "
            name="station"
          >
            <option value="0">Select Station</option>
            {data.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
        </label>
      
      </div>
    );
  };
  
  export default Form;
  
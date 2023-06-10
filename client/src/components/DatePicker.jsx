import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const DatePicker = () => {
        const [date, setDate] = useState('');
        const dateInputRef = useRef(null);

        const handleChange = (e) => {
                setDate(e.target.value);
        };

        return (
                <div>
                        <input className='font-rowdies border-2 border-gray-800 text-center text-xl ml-2 font-medium bg-yellow-400'
                                type="date"
                                onChange={handleChange}
                                ref={dateInputRef}
                        />
                        <p className='text-xl ml-6 mt-4 font-rowdies text-white'>Selected date:</p>
                        <p className='text-xl ml-8 font-medium font-rowdies text-yellow-400'>{date}</p>

                        <Link to="/timetable">
                                <button className="bg-yellow-300 text-white py-2 px-4 ml-4 mt-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Check Timetable
                                </button>
                    </Link>
                </div>

              
        );
};

export default DatePicker;
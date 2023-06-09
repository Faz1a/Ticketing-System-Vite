import React, { useRef, useState } from 'react';

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
                        <p className='text-xl ml-5 font-rowdies text-white'>Selected date:</p>
                        <p className='text-xl ml-10 font-medium font-rowdies text-yellow-400'>{date}</p>
                </div>
        );
};

export default DatePicker;
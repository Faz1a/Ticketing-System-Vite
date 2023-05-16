import SOne from '../assets/otokatamvaj.jpg'
import STwo from '../assets/tramvajvijecnica.jpg'
import SThree from '../assets/venetotramvaj.jpg'

import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


function Carousel() {
    const slides = [
        {
            url: SOne,
            heading: "Razmatra se mogućnost dodatne kupovine novih tramvaja u Sarajevu",
            text: "Ministarstvo saobraćaja Kantona Sarajevo razmatra dodatnu kupovinu novih tramvaja.",
            button: "Saznaj više"
        },
        {
            url: STwo,
            heading: "Počinje izgradnja tramvajske pruge od Ilidže do Hrasnice",
            text: "Ministar saobraćaja Kantona Sarajevo Adnan Šteta (SDP) je izjavio da ove godine počinje izgradnja tramvajske pruge od Ilidže do Hrasnice.",
            button: "Saznaj više"
        },
        {
            url: SThree,
            heading: "Direktor GRAS-a: Rekonstruisana tramvajska pruga bit će upotrebljiva 60 godina",
            text: "Direktor sarajevskog preduzeća GRAS Senad Mujagić je objasnio zašto nema dovoljno tramvaja",
            button: "Saznaj više"
        },
       
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [currentIndex]);

    return (
        <div className='h-[542px] w-full relative group shadow-yellow-200 shadow-md '>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full bg-center bg-cover duration-1000'>
                <div className='pt-40 xl:pt-60'>
                    <h1 className="text-5xl xl:text-5xl font-bold mb-2 text-yellow-400 text-center font-rowdies">{slides[currentIndex].heading}</h1>
                    <p className="text-2xl xl:text-2xl w-1/2 text-center mx-auto mt-8 text-white">{slides[currentIndex].text}</p>
                    <div className='flex justify-center mt-8'>
                    <button type="button" class=" text-yellow-400 bg-gray-800 hover:text-gray-800 hover:bg-yellow-400 p-5 rounded text-xl font-semibold">{slides[currentIndex].button}</button>
                    </div>
                </div>
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel
import React from 'react'
import Carousel from '../components/Carousel'
import Cards from '../components/Cards'
import Form from '../components/Form'
import Trips from '../components/Trips'
import Footer from '../components/Footer'
import DatePicker from '../components/DatePicker'
import Image4 from '../assets/rekonstramvaj.jpg'
import Image5 from '../assets/Crotram_2265.jpg'
import Image6 from '../assets/karticatramvaj.jpg'



const Home = () => {
  return (
    <div>
        <Carousel />
        <div>
            <div className="">
                <Form />
            </div>
            <div className="flex justify-center mt-5">
                <DatePicker />
            </div>
        <h1 className="text-yellow-400 text-4xl text-center mt-10 font-bold font-rowdies">Novosti iz GRAS</h1>
      </div>
      <div className="flex space-x-10 p-2 justify-center mt-5 font-rowdies ">
        <Cards
          title="The possibility of additional purchase of new trams in Sarajevo is being considered"
          image={Image6}
          description="
          The Ministry of Transport of Sarajevo Canton is considering the additional purchase of new trams. "
        />
        <Cards
          title="This year, the construction of the tram line from Ilidža to Hrasnica begins"
          image={Image5}
          description="
          The Minister of Transport of Sarajevo Canton, Adnan Šteta (SDP), said that the construction of the tram line from Ilidža to Hrasnica will begin. "
        />
        <Cards
          title="Director of GRAS: The reconstructed tram line will be usable for 60 years"
          image={Image4}
          description="
          The director of the Sarajevo company GRAS Senad Mujagić explained why there are not enough trams and how he plans to solve this problem. "
        />
    </div>
    <div className='flex justify-center text-3xl mt-10'>
        <Trips />
        </div>
        <div className='mt-10'>
        <Footer />
        </div>
    </div>
    
  )
}

export default Home
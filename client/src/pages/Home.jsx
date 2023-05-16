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
          title="Razmatra se mogućnost dodatne kupovine novih tramvaja u Sarajevu"
          image={Image6}
          description="Ministarstvo saobraćaja Kantona Sarajevo razmatra dodatnu kupovinu novih tramvaja, a jedan od razloga za to jeste i produženje tramvajske pruge od Ilidže do Hrasnice koje bi uskoro trebalo početi.  "
        />
        <Cards
          title="Ove godine počinje izgradnja tramvajske pruge od Ilidže do Hrasnice"
          image={Image5}
          description="Ministar saobraćaja Kantona Sarajevo Adnan Šteta (SDP) je izjavio da ove godine počinje izgradnja tramvajske pruge od Ilidže do Hrasnice.  "
        />
        <Cards
          title="Direktor GRAS-a: Rekonstruisana tramvajska pruga bit će upotrebljiva 60 godina"
          image={Image4}
          description="Direktor sarajevskog preduzeća GRAS Senad Mujagić je objasnio zašto nema dovoljno tramvaja i kako se planira riješiti ovaj problem koji je posebno izražen u posljednjih nekoliko dana.  "
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
import React from 'react'
import Cards from '../components/Cards'
import imgOne from '../assets/travel1.jpg'
import imgTwo from '../assets/travel2.jpg'
import imgThree from '../assets/travel3.jpg'

const TicketsandCards = () => {
  return (
    <div className='bg-gray-800 h-screen'>
      <div className="flex justify-center">
        <h1 className='text-4xl mt-10 text-yellow-400 font-rowdies'>Travelcards</h1>
      </div>
      <div className="flex space-x-5 justify-center mt-10 font-rowdies ">
      <Cards
      image={imgOne} 
      title="Travelcard pruža neograničen pristup javnom prijevozu, omogućavajući vam istraživanje najpopularnijih atrakcija i znamenitosti grada u vlastitom ritmu."
      description="Uz ovu karticu, možete slobodno putovati tramvajima, autobusima i vlakovima kako biste istražili sve što grad nudi. "/>
      <Cards 
      image={imgTwo}
      title="Kupovinom karte možete započeti uzbudljivo putovanje kroz prekrasne krajolike, uranjajući u ljepotu i šarm odredišta"
      description="Kupovina karte pružit će vam mogućnost da doživite nevjerojatne trenutke i stvorite uspomene koje će trajati cijeli život"/>
      <Cards 
      image={imgThree}
      title="Travelcardi i karte pružaju praktičan i bezbrižan način kretanja po gradu, osiguravajući vam besprijekorno iskustvo putovanja uz uštedu vremena i novca"
      description="Iskoristite pogodnosti putovanja bez brige o kupovini pojedinačnih karata ili planiranju ruta. Bez obzira jeste li turist koji istražuje ili lokalac koji se kreće po gradu."/>
      </div>
    </div>
  )
}

export default TicketsandCards
import React from 'react'
import Timetable from './pages/Timetable'
import TicketsandCards from './pages/TicketsandCards'
import TrainStations from './pages/TrainStations'
import Holidays from './pages/Holidays'
import Contacts from './pages/Contacts'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className=' bg-gray-700'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/timetable" element={<Timetable/>} />
        <Route path="/ticketsandcards" element={<TicketsandCards/>} />
        <Route path="/trainstations" element={<TrainStations/>} />
        <Route path="/holidays" element={<Holidays/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </div>
  )
}

export default App
import React from 'react'
import Timetable from './pages/Timetable'
import TicketsandCards from './pages/TicketsandCards'
import TrainStations from './pages/TrainStations'
import Holidays from './pages/Holidays'
import Contacts from './pages/Contacts'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import {Booking} from './CRUD-components/Booking'
import {Preplanned_Trip} from './CRUD-components/Preplanned-Trip'
import {TrainRoute} from './CRUD-components/TrainRoute'
import {Schedule} from './CRUD-components/Schedule'
import {Service} from './CRUD-components/Service'
import {Station} from './CRUD-components/Station'
import {Ticket} from './CRUD-components/Ticket'
import {Train} from './CRUD-components/Train'
import {TravelCard} from './CRUD-components/Travel-Card'
import {User} from './CRUD-components/User'
import {Login} from './user-authentication/login'
import { Registration } from './user-authentication/registration';
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
        <Route path='/admin/booking' element={<Booking />}/>
        <Route path='/admin/preplanned-trip' element={<Preplanned_Trip />}/>
        <Route path='/admin/route' element={<TrainRoute />}/>
        <Route path='/admin/schedule' element={<Schedule />}/>
        <Route path='/admin/service' element={<Service />}/>
        <Route path='/admin/station' element={<Station />}/>
        <Route path='/admin/ticket' element={<Ticket />}/>
        <Route path='/admin/train' element={<Train />}/>
        <Route path='/admin/travel-card' element={<TravelCard />}/>
        <Route path='/admin/user' element={<User />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Registration />}/>
      </Routes>
    </div>
  )
}

export default App
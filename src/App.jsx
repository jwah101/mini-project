import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import MainPage from './pages/MainPage'
import { useState } from 'react'
import data from './mokData';
import Detail from './pages/Detail'
import Invite from './pages/Invite'
import Guest from './pages/Guest'
import My from './pages/My'
import Privacy from './pages/Privacy'
import Policy from './pages/Policy'
import Footer from './component/Footer'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [soccerField, setSoccerField] = useState(data);
  const [guestInvite, setGuestInvite] = useState([]);
  const [selectedSoccerField, setSelectedSoccerField] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState([]);
    // 시간 선택시 변동 스테이트
  const [selectedSlot, setSelectedSlot] = useState([]);

  console.log(selectedSlot)
  return (
    <div className='App'>
      <Header />
      <div className='MainContent'>
        <Routes>
          <Route path='/' element = {<MainPage soccerField={soccerField}/>}/>
          <Route path='/detail/:id' element={<Detail soccerField={soccerField} setSelectedSoccerField={setSelectedSoccerField} selectedSoccerField={selectedSoccerField} selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot}/>}/>
          <Route path='/invite' element={<Invite guestInvite={guestInvite} setGuestInvite={setGuestInvite}/>} />
          <Route path='/guest' element={<Guest guestInvite={guestInvite} selectedGuest={selectedGuest} setSelectedGuest={setSelectedGuest} />}/>
          <Route path='/my' element={<My selectedSoccerField={selectedSoccerField} setSelectedSoccerField={setSelectedSoccerField} selectedGuest={selectedGuest} setSelectedGuest={setSelectedGuest} selectedSlot={selectedSlot}/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/policy' element={<Policy/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
    
  )
}

export default App;

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

function App() {
  const [soccerField, setSoccerField] = useState(data);
  const [guestInvite, setGuestInvite] = useState([]);
  const [selectedSoccerField, setSelectdeSoccerField] = useState([]);
  console.log(selectedSoccerField)
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element = {<MainPage soccerField={soccerField}/>}/>
        <Route path='/detail/:id' element={<Detail soccerField={soccerField} setSelectdeSoccerField={setSelectdeSoccerField} selectedSoccerField={selectedSoccerField}/>}/>
        <Route path='/invite' element={<Invite guestInvite={guestInvite} setGuestInvite={setGuestInvite}/>} />
        <Route path='/guest' element={<Guest guestInvite={guestInvite}/>}/>
        <Route path='/my' element={<My selectedSoccerField={selectedSoccerField}/>}/>
      </Routes>
    </div>
    
  )
}

export default App;

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
import Introduce from './pages/Introduce'
import Search from './pages/Search'



  const dayLabels = ['일', '월', '화', '수', '목', '금', '토'];
  function getTodayDate() {
  const now = new Date();
  return {
     month: now.getMonth(),
     date: now.getDate(),
    dayLabel: dayLabels[now.getDay()]
  };
  }

function App() {

  const [soccerField, setSoccerField] = useState(data);
  const [guestInvite, setGuestInvite] = useState([]);
  const [selectedSoccerField, setSelectedSoccerField] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState([]);
    // 시간 선택시 변동 스테이트
  const [selectedSlot, setSelectedSlot] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [dateIndex , setDateIndex] = useState(0);
  const [selectedDate , setSelectedDate] = useState(getTodayDate());
  


  console.log(selectedDate)
  return (
    <div className='App'>
      <Header soccerField={soccerField}  searchData={searchData} setSearchData={setSearchData} />
      <div className='MainContent'>
        <Routes>
          <Route path='/' element = {<MainPage soccerField={soccerField} dateIndex={dateIndex} setDateIndex={setDateIndex} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>}/>
          <Route path='/search' element = {<Search searchData={searchData} soccerField={soccerField}/>}/>
          <Route path='/detail/:id' element={<Detail soccerField={soccerField} setSelectedSoccerField={setSelectedSoccerField} selectedSoccerField={selectedSoccerField} selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>}/>
          <Route path='/invite' element={<Invite guestInvite={guestInvite} setGuestInvite={setGuestInvite}/>} />
          <Route path='/guest' element={<Guest guestInvite={guestInvite} selectedGuest={selectedGuest} setSelectedGuest={setSelectedGuest} />}/>
          <Route path='/my' element={<My selectedSoccerField={selectedSoccerField} setSelectedSoccerField={setSelectedSoccerField} selectedGuest={selectedGuest} setSelectedGuest={setSelectedGuest} selectedSlot={selectedSlot} selectedDate={selectedDate}/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/policy' element={<Policy/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/introduce' element={<Introduce />}/>
        </Routes>
      </div>
      <Footer />
    </div>
    
  )
}

export default App;

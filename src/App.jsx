import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import MainPage from './pages/MainPage'
import { useState } from 'react'
import data from './mokData';
import Detail from './pages/Detail'

function App() {
  const [soccerField, setSoccerField] = useState(data);


  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element = {<MainPage soccerField={soccerField}/>}/>
        <Route path='/detail/:id' element={<Detail soccerField={soccerField}/>}/>
      </Routes>

    </div>
  )
}

export default App;

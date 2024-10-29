import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Statebasic from './components/Statebasic'
import Counter from './components/Counter'
import DisplayName from './components/DisplayName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
      <Routes>
      <Route path='/S' element={<Statebasic/>}/>
        <Route path='/c' element={<Counter/>}/>
        <Route path='/d' element={<DisplayName/>}/>
       
      </Routes>
    </>
  )
}

export default App

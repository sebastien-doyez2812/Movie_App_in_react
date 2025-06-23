import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard  from './components/movies_card'
import Home from './pages/home'
import {Routes, Route} from "react-router-dom"
import Favorite from './pages/favorites'
import NavBar from './components/NavVar'

function App() {
   return ( 
    <>
    <div>
      <NavBar/>
      <main className= "main-content">
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path= "/favorites" element= {<Favorite/>}></Route>
        </Routes>
      </main>
    </div>
    </>
  );   
}
  
export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard  from './components/movies_card'

function App() {
  const cas = 2;
  const my_movie = {
    title: "Terminator",
    release_date: "2024"
  }
  const defaut =  {
    title: "Steven Seagal",
    release_date: "1986"
  }
   return ( 
    <>
    {cas == 1? 
    (<MovieCard movie={my_movie}/>):
    (<MovieCard movie={defaut}/>)
    }
    </>
  );   
}
  
export default App

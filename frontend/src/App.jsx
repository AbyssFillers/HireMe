import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Searchbar from './components/SearchBar'
import Jobcard from './components/Jobcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Header/>
      <Searchbar/>
      <Jobcard/>
    </div>
  )
}

export default App

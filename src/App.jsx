import React  from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Search from './components/Search'
import Selects from './components/Selects'
import Carousal from './components/Carousal'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Selects/>
      <Carousal/>
      <Footer/>
    </>
  )
}

export default App

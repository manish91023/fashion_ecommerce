import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import Sign from './Components/Sign'
import Signup from './Components/Signup'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import PageNotFound from './Components/PageNotFound'
import Cart from './Components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
     <Nav/>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/signin' element={<Sign/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/*' element={<PageNotFound/>} />
        </Routes>
      <Footer/>
     </Router>
     </>
  )
}

export default App


import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../src/components/Home'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Brecho from '../src/components/Brecho'
import Doacoes from '../src/components/Doacoes'

function App() {


  return (

<BrowserRouter >
    <div>
      
        <Header />
        
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path= "/About" element={<About/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Brecho" element={<Brecho />} />
            <Route path="/Doacoes" element={<Doacoes />} />
          </Routes>
        
        <Footer />
      
    </div>
</BrowserRouter>
  )
}

export default App

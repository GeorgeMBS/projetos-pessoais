import React from 'react';
import './Layout.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/menu/Home';
import SobreNós from '../components/menu/SobreNós';
import Filiais from '../components/menu/Filiais';
import Cardápio from '../components/menu/Cardápio';
import Contato from '../components/menu/Contato';



const Layout = () => {
  return (


    <div className='LayoutBox'>
      <div className='Layout'>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardápio />} />
          <Route path="/filiais" element={<Filiais />} />
          <Route path="/sobre" element={<SobreNós />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

      </div>
    </div>
  )
}

export default Layout
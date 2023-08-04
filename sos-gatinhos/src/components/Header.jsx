import React from 'react'
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <div className='head'>
      <div><img className='logo' src="public\static\imagensgdc\logo1.png" alt="Logotipo" title='Logotipo Gatos da Colônia' /></div>
      <h1 className='title'>SOS Gatos da Colônia</h1>
      <ul className='nav'>
        <li><Link to="/" className='text-link'>Home</Link></li>
        <li><Link to="/About" className='text-link'>Sobre nós</Link></li>
        <li><Link to="/Contact" className='text-link'>Contato</Link></li>
        <li><Link to="/Brecho" className='text-link'>Brechó</Link></li>
        <li><Link to="/Doacoes" className='text-link'>Doações</Link></li>
      </ul>

    </div>
  )
}

export default Header


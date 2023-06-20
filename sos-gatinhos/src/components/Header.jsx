import React from 'react'
import styles from "../components/styles/Header.css"

const Header = () => {
  return (
    <div className='head'>
      <div><img className='logo' src="\imagens\Logo1.png" alt="Logotipo" title='Logotipo Gatos da Colônia' /></div>
      <h1 className='title'>SOS Gatos da Colônia</h1>
      <ul className='nav'>
        <li>Home</li>
        <li>Sobre nós</li>
        <li>Contato</li>
        <li>Brechó</li>
        <li>Doações</li>
      </ul>

    </div>
  )
}

export default Header
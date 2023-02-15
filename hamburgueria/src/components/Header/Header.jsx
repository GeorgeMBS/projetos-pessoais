import React from 'react'
import styles from "./Header.css"

const Header = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <img src="../src/images/hamburguer.png" alt="logo" />
      </div>
      <div className='title'>
        <h1>Hamburgueria</h1>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import styles from "./Header.css"
import ShoppingCart from './ShoppingCart'

const Header = () => {
  return (
    <div className='container'>
      <div className='logoContainer'>
        <div className='logo'>
          <img src="../src/images/hamburguer.png" alt="logo" />
        </div>
        <div className='title'>
          <h1>Hamburgueria</h1>
        </div>
      </div>
      <ShoppingCart />
    </div>
  )
}

export default Header
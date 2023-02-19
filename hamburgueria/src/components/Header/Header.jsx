import React from 'react'
import styles from "./Header.css"
import ShoppingCart from './ShoppingCart'

const Header = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <img src="../src/images/carne.png" alt="logo" />
      </div>
      <div className='title'>
        <h1>Hamburgueria</h1>
      </div>
      <div className='Cart'>
        <ShoppingCart />
      </div>
    </div>
  )
}

export default Header
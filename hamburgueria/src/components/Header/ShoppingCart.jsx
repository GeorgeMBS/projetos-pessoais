import React from 'react'
import styles from './ShoppingCart.css'

export const ShoppingCart = () => {
  return (
    <div className='cartAll'>
      <div className='cartBg'>
        <div>
          <img className='cartLogo' src="../src/images/cart.png" alt="cart" />
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
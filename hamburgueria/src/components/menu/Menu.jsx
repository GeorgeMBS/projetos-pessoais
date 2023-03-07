import React from 'react'
import styles from './Menu.css'

const Menu = () => {
  return (
    <div>
      <nav className='Nav'>
        <a href="./Home">Home</a>
        <a href="#">Cardápio</a>
        <a href="#">filiais</a>
        <a href="#">contato</a>
        <a href="#">sobre nós</a>
        <div className="animation start-home">
        </div>
      </nav>

    </div>
  )
}

export default Menu


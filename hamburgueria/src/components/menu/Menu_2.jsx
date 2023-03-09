import React from 'react'
import { Link } from 'react-router-dom';
import "./Menu_2.css"

const Menu_2 = () => {
  return (
    <nav>
      <ul className='list'>
        <li className='navigation'>
          <Link to="/">Home</Link>
        </li>
        <li className='navigation'>
          <Link to="/cardapio">Cardápio</Link>
        </li>
        <li className='navigation'>
          <Link to="/filiais">Filiais</Link>
        </li>
        <li className='navigation'>
          <Link to="/sobre">Sobre Nós</Link>
        </li>
        <li className='navigation'>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu_2
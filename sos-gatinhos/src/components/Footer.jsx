import React from 'react'
import styles from './styles/Footer.css'

const Footer = () => {
  return (

    <div className='rodape'>


      <div className='social'>

        <a href="https://www.instagram.com/sosgatosdacolonia/" target='blank'>
          <img src="public\static\imagensgdc\instagram.png" alt="Instagram" />
        </a>
        <a href=" https://www.facebook.com/sosgatosdacolonia" target='blank'>
          <img src="public\static\imagensgdc\facebook.png" alt="" />
        </a>
        <a href=" https://chat.whatsapp.com/J80TmFKX84I9M0GFNtQFfm" target='blank'>
          <img src="public\static\imagensgdc\whatsapp.png" alt="" />
        </a>

      </div>

      <div className='dGitHub'>

        <p>site desenvolvido por <a href="https://github.com/GeorgeMBS" target='blank'>George M. Barbosa Silveira</a></p> 

      </div>


    </div>
  )
}

export default Footer
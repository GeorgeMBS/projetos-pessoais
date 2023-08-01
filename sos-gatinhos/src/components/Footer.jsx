import React from 'react'
import styles from './styles/Footer.css'

const Footer = () => {
  return (

    <div className='rodape'>


      <div className='social'>

        <a href="https://www.instagram.com/sosgatosdacolonia/" target='blank'>
          <img src="imagens\instagram.png" alt="Instagram" />
        </a>
        <a href=" https://www.facebook.com/sosgatosdacolonia" target='blank'>
          <img src="imagens\facebook.png" alt="" />
        </a>
        <a href=" https://www.facebook.com/sosgatosdacolonia" target='blank'>
          <img src="imagens\whatsapp.png" alt="" />
        </a>

      </div>

      <div className='dGitHub'>

        <p>site desenvolvido por <a href="https://github.com/GeorgeMBS" target='blank'>George M. Barbosa Silveira</a></p> 

      </div>


    </div>
  )
}

export default Footer
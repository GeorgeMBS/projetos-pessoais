import React from 'react'
import './styles/Home.css'

import { motion } from 'framer-motion'

import Adotados1 from '/src/Adotados01.jpg'
import Adotados2 from '/src/Adotados02.jpg'
import Adotados4 from '/src/Adotados04.jpg'
import Adotados5 from '/src/Adotados05.jpg'
import Adotados6 from '/src/Adotados06.jpg'
import Adotados7 from '/src/Adotados07.jpg'
import Adotados11 from '/src/Adotados11.jpg'
import Adotados12 from '/src/Adotados12.jpg'
import Adotados13 from '/src/Adotados13.jpg'
import Adotados10 from '/src/Adotados10.jpg'
import adote from '/src/adoteumgato.jpg'

import { useState, useEffect, useRef } from 'react'

const Adotados = [adote, Adotados1, Adotados2, Adotados4, Adotados5, Adotados10, Adotados6, Adotados7, Adotados11, Adotados12, Adotados13, adote]

const Home = () => {

  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

  }, [])


  return (

    <div className="geral">
      <div className='carrossel'>
        <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className='inner'
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
          >
            {Adotados.map(image => (
              <motion.div className='item' key={image}>
                <img src={image} alt="carrossel" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <h2 className='subtitle'>☝🏻 Veja alguns dos nossos bichanos que já tem um lar pra chamar de seu!</h2>

      <div className='container-galeria'>
        <ul className='galeria'>
          <li >
            <img src="/003.jpg" alt="" />
          </li>
          <li>
            <img src="/004.jpg" alt="" />
          </li>
          <li>
            <img src="/005.jpg" alt="" />
          </li>
          <li>
            <img src="/006.jpg" alt="" />
          </li>
          <li>
            <img src="/007.jpg" alt="" />
          </li>
          <li>
            <img src="/008.jpg" alt="" />
          </li>
        </ul>
      </div>

      <h2 className='subtitle2'><img className='adote' src="src/adote.png" alt="adote" />Mas ainda precisamos achar um lar para muitos dos nossos gatinhos!</h2>

      <p>Entre em contato conosco pelas nossas redes sociais, ou no nosso grupo do <a className='whats' href="https://chat.whatsapp.com/J80TmFKX84I9M0GFNtQFfm">WhatsApp</a>.</p>
      <p>Toda ajuda é muito bem vinda! Na seção de "Doações" explicamos como você pode ajudar e fazer a diferença!</p>
      
    </div>





  )
}

export default Home


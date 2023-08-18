import React from 'react'
import './styles/Home.css'

import { motion } from 'framer-motion'

import Adotados1 from '/src/Adotados01.jpg'
import Adotados2 from '/src/Adotados02.jpg'
import Adotados4 from '/src/Adotados04.jpg'
import Adotados5 from '/src/Adotados05.jpg'
import Adotados6 from '/src/Adotados06.jpg'
import Adotados7 from '/src/Adotados07.jpg'
import adote from '/src/adoteumgato.jpg'

import { useState, useEffect, useRef } from 'react'

const Adotados = [adote, Adotados1, Adotados2, Adotados4, Adotados5, Adotados6, Adotados7, adote]

const Home = () => {

   const carousel = useRef();
   const [width, setWidth] = useState(0)

   useEffect(() => {
      console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

   }, [])


  return (

    <div className='principal'>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor:"grabbing"}}>
          <motion.div 
          className='inner' 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 300}}
          animate={{ x: 0}}
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





  )
}

export default Home


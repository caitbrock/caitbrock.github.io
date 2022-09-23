import React from 'react'
import logo from '../../CaitBrock-02.png'
import "./Logo.css"
import { motion } from 'framer-motion'

function Logo() {
  return (
    <motion.div
        initial={{x: -1000}}
        animate= {{x: 0 }}>
        <img className="Logo" src={logo} />
    </motion.div>
  )
}

export default Logo
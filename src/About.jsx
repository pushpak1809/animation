import React from 'react';
import Hero from './Hero'
import Header from './Header'
import Image from './images/10.jpg'
import { motion } from 'framer-motion'
import {animation2} from './Animation'

const About = () => {
    return (
        <>
         <motion.div
           initial='out' animate='in' exit='out' variants={animation2} >
            <Header/>
            <Hero image={Image}  title='Beautiful Views'
            desc='Never seen Before'/>
            </motion.div>
        </>
    )
}

export default About;

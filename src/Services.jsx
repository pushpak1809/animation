import React from 'react';
import Hero from './Hero'
import Header from './Header'
import Image from './images/4.jpg'
import { motion } from 'framer-motion'
import {animation3} from './Animation'

const Services = () => {
    return (
        <>
         <motion.div
           initial='out' animate='end' exit='out' variants={animation3} >
            <Header/>
            <Hero image={Image}  title='Look at this Bird'
            desc='Can you believe this?'/>
            </motion.div>
        </>
    )
}

export default Services;

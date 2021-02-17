import React from 'react';
import Hero from './Hero'
import Header from './Header'
import Image from './images/1.jpg'
import { motion } from 'framer-motion'
import {animation1,transition} from './Animation'
const Home = () => {
    return (
        <>
            <motion.div
           initial='out' animate='in' exit='out' variants={animation1} transition={transition}>
                <Header />
                <Hero image={Image} title='Experience Nature'
                    desc='Once in a Lifetime' />
            </motion.div>
        </>
    )
}

export default Home;

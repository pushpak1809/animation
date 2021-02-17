import React from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Services from './Services'
import {AnimatePresence} from 'framer-motion';
import GlobalStyle from './Globalstyles'
import {Switch, Route,useLocation} from 'react-router-dom'
import styled from 'styled-components'

const Section=styled.section`overflow-x:hidden;`

const App = () => {

let location =useLocation();

    return (

        <>
        <Section>
            <GlobalStyle/>
            <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route exact path='/' component={Home} />
                <Route  exact path='/about' component={About} />
                <Route exact path='/services' component={Services} />
            </Switch>
            </AnimatePresence>
            </Section>
        </>
        
    )
}

export default App;

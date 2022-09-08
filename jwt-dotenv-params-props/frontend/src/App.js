import React from 'react'
import { Header } from './components/Header'
import {HomeScreen} from './screens/HomeScreen'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import { AboutScreen } from './screens/AboutScreen'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import UserScreen from './screens/UserScreen'

const App = () => {
  return (
    <BrowserRouter>   
        <Header />   
        <main className='py-5'>  
        <Container>
          <Routes>     
            <Route index path="/" element={<HomeScreen />} />         
            <Route path="/about" element={<AboutScreen />} />    
            <Route path="/user/:fname" element={<UserScreen />} />    
        
          </Routes>
        </Container>
        </main>     
        <Footer />   
    </BrowserRouter>
  )
}

export default App

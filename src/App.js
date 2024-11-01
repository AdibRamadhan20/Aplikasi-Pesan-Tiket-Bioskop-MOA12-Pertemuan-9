import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuHomeMovies from './components/MenuHomeMovies';
import CaptionContainer from './components/CaptionContainer';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './App.css';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <MenuHomeMovies />
            </>
          }
        />
        <Route 
          path="/About" 
          element={
            <>
              <AboutUs />
            </>
          }
        />
        <Route 
          path="/Movies" 
          element={
            <>
              <Movies />
            </>
          }
        />
      </Routes>
      <CaptionContainer />
      <Footer />
    </div>
  );
}

export default App;

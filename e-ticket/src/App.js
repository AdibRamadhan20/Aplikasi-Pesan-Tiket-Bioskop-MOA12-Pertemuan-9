import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieGrid from './components/MovieGrid';
import CaptionContainer from './components/CaptionContainer';
import Footer from './components/Footer';
import './App.css';

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
              <MovieGrid />
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

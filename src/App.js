import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Info from './components/Info';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Info />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotronhome from './components/JumbotronHome';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Jumbotronhome />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotronhome from './components/JumbotronHome';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      {/* <Jumbotronhome /> */}
      <Portfolio />
    </div>
  );
}

export default App;

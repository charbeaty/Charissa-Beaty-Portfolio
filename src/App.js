import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Connect from './pages/Connect';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/connect" component={Connect} />
        <Footer />
      </div>

    </Router>
 
  );
}

export default App;

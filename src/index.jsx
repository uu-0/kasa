import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import App from './components/App';
import Header from './components/Header';
import Home from './pages/Home';
import Logement from './pages/Logement';
import APropos from './pages/APropos';
import Error from './components/Error';
import Footer from './components/Footer';

import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);





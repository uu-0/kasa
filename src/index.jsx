import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Accueil from './pages/Accueil';
import Logement from './pages/Logement';
import APropos from './pages/APropos';
import Error from './components/Error';
import Footer from './components/Footer';

import './styles/css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);





import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './Header';
import Accueil from '../pages/Accueil';
import Logement from '../pages/Logement';
import APropos from '../pages/APropos';
import Error from './Error';
import Footer from './Footer';

import '../styles/css/App.css';

function App() {
  return (
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
  );
}

export default App;

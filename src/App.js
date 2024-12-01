import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Accueil from './pages/Accueil';
import Logement from './pages/Logement';
import APropos from './pages/APropos';
import Error from './pages/Error';
import Footer from './components/Footer';

import './styles/css/App.css';

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

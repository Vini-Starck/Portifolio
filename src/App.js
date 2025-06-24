// src/App.js
import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Formacao from './sections/Formacao';
import Experiencia from './sections/Experiencia';
import Tecnologias from './sections/Tecnologias';
import Idiomas from './sections/Idiomas';
import Projetos from './sections/Projetos';
import Contato from './sections/Contato';
import Perfil from './sections/Perfil';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Perfil />
        <Formacao />
        <Experiencia />
        <Projetos />
        <Tecnologias />
        <Idiomas />
        <Contato />
      </main>

      <Footer />
    </div>
  );
}

export default App;

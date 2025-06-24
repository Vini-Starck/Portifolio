// src/sections/Idiomas.js
import React from 'react';
import './Idiomas.css';

function Idiomas() {
  return (
    <section className="idiomas" id='idiomas'>
      <div className="container-idiomas">
        <h2 className="titulo-idiomas">Idiomas</h2>

        <ul className="lista-idiomas">
          <li><strong>Português:</strong> Nativo</li>
          <li><strong>Inglês:</strong> Intermediário/Avançado</li>
          <li><strong>Espanhol:</strong> Básico/Intermediário</li>
        </ul>
      </div>
    </section>
  );
}

export default Idiomas;

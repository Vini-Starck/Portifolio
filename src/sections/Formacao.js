// src/sections/Formacao.js
import React from 'react';
import './Formacao.css';

function Formacao() {
  return (
    <section className="formacao" id="formacao">
      <div className="container-formacao">
        <h2 className="titulo-formacao">Formação Acadêmica</h2>
        <div className="formacao-item">
          <h3 className="instituicao">CENTRO UNIVERSITÁRIO SENAC <span className="data">| JUN/2025</span></h3>
          <p className="curso">Bacharelado em Sistemas de Informação</p>
        </div>
      </div>
    </section>
  );
}

export default Formacao;

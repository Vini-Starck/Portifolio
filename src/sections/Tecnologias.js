// src/sections/Tecnologias.js
import React from 'react';
import './Tecnologias.css';

function Tecnologias() {
  return (
    <section className="tecnologias" id="tecnologias">
      <div className="container-tecnologias">
        <h2 className="titulo-tecnologias">Tecnologias</h2>

        <ul className="lista-tecnologias">
          <li><strong>Linguagens:</strong> JavaScript, TypeScript, Kotlin, Python, SQL</li>
          <li><strong>Front-end:</strong> React.js, HTML, CSS</li>
          <li><strong>Back-end:</strong> Node.js, Firebase</li>
          <li><strong>Ferramentas:</strong> GitHub, CI/CD, DevOps, Excel</li>
          <li><strong>UI/UX:</strong> Design centrado no usuário, prototipação e usabilidade</li>
        </ul>
      </div>
    </section>
  );
}

export default Tecnologias;

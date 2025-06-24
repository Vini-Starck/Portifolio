// src/sections/Perfil.js
import React from 'react';
import './Perfil.css';
import perfilImg from '../assets/perfil.png'; // Coloque a imagem em src/assets/

function Perfil() {
  return (
    <section className="perfil" id="perfil">
      <div className="container-perfil">
        <div className="perfil-img">
          <img src={perfilImg} alt="Foto de Vinícius Starck" />
        </div>

        <div className="perfil-conteudo">
          <h2 className="perfil-nome">Vinícius Starck</h2>

          <div className="perfil-bloco">
            <h3>Objetivo</h3>
            <p>
              Atuar como Desenvolvedor Web ou Mobile, contribuindo com soluções modernas,
              interfaces centradas no usuário e automações eficientes para projetos de impacto.
            </p>
          </div>

          <div className="perfil-bloco">
            <h3>Perfil Profissional</h3>
            <ul>
              <li>
                Profissional versátil, com perfil analítico e boa comunicação, capaz de atuar tanto
                na construção técnica de soluções quanto no suporte a equipes multidisciplinares.
              </li>
              <li>
                Comprometido com entregas de valor, qualidade e experiência positiva para o usuário final.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;

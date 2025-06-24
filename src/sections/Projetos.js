// src/sections/Projetos.js
import React from 'react';
import './Projetos.css';
import { FiExternalLink } from 'react-icons/fi';

import doafacilImg from '../assets/doafacil.png';
import arthuroImg from '../assets/arthuro.png';
import spotifyImg from '../assets/spotify.png';
import safedocImg from '../assets/safedoc.png';
import ecowayImg from '../assets/ecoway.png';

function Projetos() {
  const projetos = [
    {
      nome: 'DoaFácil',
      imagem: doafacilImg,
      link: 'https://doafacil-ab7e4.web.app/',
      descricao: 'Facilitando acesso a doações.',
      tecnologias: [
        'React.js', 'HTML', 'CSS', 'Firebase', 'Github Actions', 'CI/CD',
        'Maps API', 'Authentication', 'Firestore', 'Cloud Storage',
        'Cloud Functions', 'AbacatePay'
      ]
    },
    {
      nome: 'Arthuro Music',
      imagem: arthuroImg,
      link: 'https://arthuro-855cc.web.app/',
      descricao: 'Landing Page desenvolvida para o DJ Arthuro.',
      tecnologias: ['React.js', 'HTML', 'TailwindCSS', 'Firebase Hosting']
    },
    {
      nome: 'Réplica Spotify',
      imagem: spotifyImg,
      link: 'https://replicaspotifydeploy.onrender.com/',
      descricao: 'Treinando habilidades com React + Vite, réplica do player de música famoso Spotify.',
      tecnologias: ['React', 'Vite', 'MongoDB', 'Node.js']
    },
    {
      nome: 'SafeDoc WebApp',
      imagem: safedocImg,
      link: 'https://www.youtube.com/watch?v=BeFR6po9Gz4&ab_channel=ViniciusStarck',
      descricao: 'Sistema de segurança documental com autenticação e autorização.',
      tecnologias: [
        'Python', 'Flask', 'Azure', 'SQL', 'CI/CD',
        'BlobStorage', 'Cognitive Services', 'Windows', 'Linux'
      ]
    },
    {
      nome: 'EcoWay (em andamento)',
      imagem: ecowayImg,
      link: null,
      descricao: 'App de compartilhamento de caronas desenvolvido com Kotlin e Firebase.',
      tecnologias: ['Kotlin', 'Android', 'Firebase', 'Maps API']
    }
  ];

  return (
    <section className="projetos" id="projetos">
      <div className="container-projetos">
        <div className="cabecalho-projetos">
          <h2 className="titulo-projetos">Projetos</h2>
          <h3 className="subtitulo-projetos">(Clique no nome ou ícone para acessar)</h3>
        </div>
        <div className="grid-projetos">
          {projetos.map((projeto, index) => (
            <div key={index} className="card-projeto">
              <img
                src={projeto.imagem}
                alt={`Imagem do projeto ${projeto.nome}`}
                className="imagem-projeto"
              />
              <h3 className="nome-projeto">
                {projeto.link ? (
                  <>
                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-projeto"
                    >
                      {projeto.nome} <FiExternalLink className="icone-link" />
                    </a>
                  </>
                ) : (
                  projeto.nome
                )}
              </h3>
              <p className="descricao-projeto">{projeto.descricao}</p>
              <ul className="tecnologias-projeto">
                {projeto.tecnologias.map((tec, i) => (
                  <li key={i}>{tec}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;

// src/sections/Projetos.js
import React from 'react';
import './Projetos.css';
import { FiExternalLink } from 'react-icons/fi';

import doafacilImg from '../assets/doafacil.png';
import arthuroImg from '../assets/arthuro.png';
import spotifyImg from '../assets/spotify.png';
import safedocImg from '../assets/safedoc.png';
import ecowayImg from '../assets/ecoway.png';
import NLWAgentsImg from '../assets/nlwagents.png'
import PizzaScratchImg from '../assets/scratch.png'

const projetos = [
  {
    nome: 'Let me Ask - NLW Agents',
    imagem: NLWAgentsImg,
    link: 'https://nlw-agents-ai.web.app/',
    descricao: 'Criação de salas e perguntas. Geração de respostas inteligentes via Gemini API. Gravação e transcrição de áudio.',
    tecnologias: [
      'React', 'Vite', 'TailwindCSS', 'TypeScript', 'Node.js', 'Render' , 'Fastify', 'Firebase', 'React-Router-DOM', 'React Query', 'CI/CD',
      'Gemini API', 'Drizzle ORM', 'PostgreSQL', 'Supabase', 'Docker', 'Transcription e Embeddings de áudios'
    ]
  },
  {
    nome: 'DoaFácil',
    imagem: doafacilImg,
    link: 'https://doafacil-ab7e4.web.app/',
    descricao: 'Democratizando o acesso a doações. Projeto de TCC aprovado em Junho de 2025 para conclusão do curso Bacharelado em Sistemas de Informação pelo Centro Universitário Senac.',
    tecnologias: [
      'React.js', 'HTML', 'CSS', 'Firebase', 'Github Actions', 'CI/CD',
      'Maps API', 'Authentication', 'Firestore', 'Cloud Storage',
      'Cloud Functions', 'AbacatePay'
    ]
  },
  {
    nome: 'Pizza Scratch',
    imagem: PizzaScratchImg,
    link: 'https://pizza-scratch.web.app/',
    descricao: 'Raspadinha de pizza online para ganho de promoções como pizza com desconto, grátis, refrigerante e mais.',
    tecnologias: [
      'React', 'Vite', 'TypeScript', 'HTML', 'TailwindCSS', 'HTML Canvas', 'Particles', 'AnimationFrame'
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
    descricao: 'Player musical baseado no Spotify, usando Vite + Mongo + Node.',
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
    descricao: 'App de compartilhamento de caronas feito em Kotlin + Firebase.',
    tecnologias: ['Kotlin', 'Android', 'Firebase', 'Maps API']
  }
];

function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <div className="container-projetos">
        <h2 className="titulo-projetos">Projetos</h2>

        <div className="grid-projetos">
          {projetos.map(({ nome, imagem, descricao, tecnologias, link }, index) => (
            <article key={index} className="card-projeto">
              <img
                src={imagem}
                alt={`Screenshot do projeto ${nome}`}
                className="imagem-projeto"
                loading="lazy"
              />
              <div className="conteudo-projeto">
                <h3 className="nome-projeto">{nome}</h3>
                <p className="descricao-projeto">{descricao}</p>
                <ul className="tecnologias-projeto">
                  {tecnologias.map((tec, i) => (
                    <li key={i}>{tec}</li>
                  ))}
                </ul>
              </div>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-projeto"
                  aria-label={`Ver projeto ${nome}`}
                >
                  Ver Projeto <FiExternalLink />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;

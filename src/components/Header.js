// src/components/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaChess,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const sections = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'formacao', label: 'Formação' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'idiomas', label: 'Idiomas' },
  { id: 'contato', label: 'Contato' },
];

function Header() {
  const [activeSection, setActiveSection] = useState('perfil');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 150;
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <a href="#perfil" className="logo" onClick={closeMenu}>Vinícius Starck</a>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="redes-sociais">
          <a href="https://www.linkedin.com/in/vinicius-starck" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Vini-Starck" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://instagram.com/Vini_Starck" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="mailto:starck.vinicius@gmail.com"><FaEnvelope /></a>
          <a href="https://www.chess.com/member/starck9" target="_blank" rel="noopener noreferrer"><FaChess /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;

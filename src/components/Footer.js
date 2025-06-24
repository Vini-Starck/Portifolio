// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaChess } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-center">
          <p>&copy; {new Date().getFullYear()} Vinícius Starck. Todos os direitos reservados.</p>
        </div>

        <div className="footer-right">
          <a href="https://www.linkedin.com/in/vinicius-starck" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Vini-Starck" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://instagram.com/Vini_Starck" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="mailto:starck.vinicius@gmail.com"><FaEnvelope /></a>
          <a href="https://www.chess.com/member/starck9" target="_blank" rel="noopener noreferrer"><FaChess /></a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

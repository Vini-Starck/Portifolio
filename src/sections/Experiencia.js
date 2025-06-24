// src/sections/Experiencia.js
import React from 'react';
import './Experiencia.css';

function Experiencia() {
  return (
    <section className="experiencia" id="experiencia">
      <div className="container-experiencia">
        <h2 className="titulo-experiencia">Experiência Profissional</h2>

        <div className="experiencia-item">
          <h3 className="cargo">DESENVOLVEDOR FREELANCE <span className="periodo">| JAN/2025 – ATUAL</span></h3>
          <ul className="descricao">
            <li>Desenvolvimento de aplicações web e mobile com foco em performance e experiência do usuário.</li>
            <li>Integração com Firebase e APIs externas.</li>
            <li>Implantação de processos CI/CD e automação de deploys.</li>
          </ul>
        </div>

        <div className="experiencia-item">
          <h3 className="cargo">TD SYNNEX – ESTAGIÁRIO DE PRODUTOS E SEGURANÇA DA INFORMAÇÃO <span className="periodo">| MAI/2021 – MAR/2023</span></h3>
          <ul className="descricao">
            <li>Apoio a gerentes de produtos de grandes fabricantes (IBM, Fortinet, Palo Alto, Trend Micro, Cisco).</li>
            <li>Cadastro e atualização de produtos, envio de relatórios de faturamento e estoque.</li>
            <li>Apoio técnico a diversas áreas: engenharia, operações, vendas e contas.</li>
          </ul>
        </div>

        <div className="experiencia-item">
          <h3 className="cargo">TERRACOTA DOC – AUXILIAR DE LOJA <span className="periodo">| JUL/2019 – JAN/2020</span></h3>
          <ul className="descricao">
            <li>Abertura e fechamento da loja, controle de estoque e planilhas no Excel.</li>
            <li>Organização de eventos e workshops sobre vinhos.</li>
            <li>Atendimento ao cliente, montagem de kits promocionais e suporte técnico de equipamentos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;

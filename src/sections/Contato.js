import React, { useState } from 'react';
import './Contato.css';
import emailjs from '@emailjs/browser';

function Contato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_xp5hhxo';
    const templateID = 'template_kgvyasw';
    const publicKey = 'pSPEn0wTuu5y3ltBD';

    // Formata a data/hora para algo mais legível
    const dataHora = new Date().toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const templateParams = {
      name: form.nome,
      email: form.email,
      message: form.mensagem,
      time: dataHora, // Este valor será inserido no campo {{time}} do template
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        setForm({ nome: '', email: '', mensagem: '' });
      })
      .catch((err) => {
        console.error('Erro ao enviar email:', err);
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="contato" id="contato">
      <div className="container-contato">
        <h2 className="titulo-contato">Entre em Contato</h2>
        <form className="form-contato" onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>

          <label>
            Mensagem
            <textarea
              name="mensagem"
              rows="5"
              value={form.mensagem}
              onChange={handleChange}
              required
              disabled={loading}
            ></textarea>
          </label>

          <button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;

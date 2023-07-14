import React, { useState } from 'react';

import { get } from 'lodash';

import PropTypes from 'prop-types';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', 0);

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container onSubmit={(e) => handleSubmit(e)}>
      <h1>{id ? 'Editar aluno' : 'Novo aluno'}</h1>

      <Form>
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome"
          />
        </label>

        <label htmlFor="sobrenome">
          Sobrenome
          <input
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="Digite o sobrenome"
          />
        </label>

        <label htmlFor="email">
          E-mail
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o email"
          />
        </label>

        <label htmlFor="idade">
          Idade
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            placeholder="Digite a idade"
          />
        </label>

        <label htmlFor="peso">
          Peso
          <input
            type="text"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite o peso"
          />
        </label>

        <label htmlFor="altura">
          Altura
          <input
            type="text"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Digite a altura"
          />
        </label>

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = { match: PropTypes.shape({}).isRequired };

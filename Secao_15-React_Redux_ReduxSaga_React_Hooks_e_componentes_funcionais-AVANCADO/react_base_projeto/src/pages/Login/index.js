import React from 'react';

import { useDispatch } from 'react-redux';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch({ type: 'BOTAO_CLICADO' });
  }

  return (
    <Container>
      <Title>
        Login <small>Teste</small>
      </Title>

      <Paragrafo>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nostrum
        placeat cumque quia eius deleniti temporibus inventore vitae excepturi
        enim ea, unde id expedita eaque. Eum modi at beatae porro!
      </Paragrafo>

      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}

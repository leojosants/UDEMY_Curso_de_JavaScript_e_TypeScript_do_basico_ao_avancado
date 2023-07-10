import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
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

      <button type="button">Enviar</button>
    </Container>
  );
}

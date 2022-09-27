import React from 'react';
import { Text } from 'react-native';

import { Container, Title } from './styles';

interface Props {
    status: "INICIO" | "MEIO" | "FIM" 
}

export function Card({status}: Props) {
  return (
    <Container>
        <Title>{status}</Title>
    </Container>
  );
}
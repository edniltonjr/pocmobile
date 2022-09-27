import React from 'react';
import { View } from 'react-native';
import { Card } from '../../components/Card';

import { Container } from './styles';

const data = [
    {
        id: 1,
        status: 'INICIO'
    },

    {
        id: 2,
        status: 'MEIO'
    },

    {
        id: 3,
        status: 'FIM'
    }
]

export function Home() {
  return (
    <Container
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
            <Card status={item.status}/>
        )}
    />
        
  );
}
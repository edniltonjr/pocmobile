import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Card } from './src/components/Card';
import { Home } from './src/screens/Home';
import theme from './src/styles/theme';



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
      backgroundColor="transparent"
      />
    <Home/>
</ThemeProvider>  );
}


import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import BarraTitulo from './components/BarraTitulo/index';
import Card from './components/Card';
import Conteudo from './components/Conteudo';

 

export default function App() {
  return (
      <View style={styles.container}>
        <BarraTitulo/>
        <Card/>
        <Conteudo/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c4491",
    alignItems: "center"
  }
})

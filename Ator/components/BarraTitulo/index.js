import React from 'react';
import {Text, View } from 'react-native';

import styles from './estilos';

export default function BarraTitulo() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ATOR FAMOSO</Text>
    </View>
  );
}


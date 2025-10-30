import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HistorialEnviosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Historial de Envíos</Text>
      <Text style={styles.sub}>Aquí aparecerá el historial de préstamos o transacciones</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  sub: {
    color: '#374151',
    marginTop: 10,
  },
});

export default HistorialEnviosScreen;

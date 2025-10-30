import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ComprobantesPagos() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comprobantes de Pagos</Text>
      <Text style={styles.sub}>Aquí se mostrarán los comprobantes generados por el sistema</Text>
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

export default ComprobantesPagos;

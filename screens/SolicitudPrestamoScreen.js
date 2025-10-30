// screens/SolicitudPrestamoScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function SolicitudPrestamoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Solicitud de préstamo</Text>
      <Button title="Financiar" onPress={() => alert('Financiando préstamo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

export default SolicitudPrestamoScreen;

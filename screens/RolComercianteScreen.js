// screens/RolComercianteScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function RolComercianteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bienvenido comerciante</Text>
      <Button title="Solicitar préstamo" onPress={() => navigation.navigate('SolicitudPrestamo')} />
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

export default RolComercianteScreen;

// screens/ProveedorScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ProveedorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Proveedor Screen</Text>
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

export default ProveedorScreen;

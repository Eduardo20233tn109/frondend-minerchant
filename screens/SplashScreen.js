// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Redirige automáticamente a Login después de 3 segundos
    }, 3000);

    return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonta
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MINERCHANT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0043A7', // Color de fondo (ajustar al diseño)
  },
  logo: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SplashScreen;

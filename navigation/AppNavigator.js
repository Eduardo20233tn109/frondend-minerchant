// navigation/AppNavigator.js
import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Importar las pantallas
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistroUsuarioScreen from '../screens/RegistroUsuarioScreen';
import ProveedorScreen from '../screens/ProveedorScreen';
import RolComercianteScreen from '../screens/RolComercianteScreen';
import SolicitudPrestamoScreen from '../screens/SolicitudPrestamoScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RegistroUsuario" component={RegistroUsuarioScreen} />
        <Stack.Screen
          name="Proveedor"
          component={ProveedorScreen}
          options={({ navigation }) => ({
            title: 'Proveedor',
            headerLeft: () => (
              <Text
                style={{ marginLeft: 16, fontSize: 22 }}
                onPress={() => {
                  if (navigation.canGoBack()) {
                    navigation.goBack();
                  } else {
                    navigation.navigate('Login');
                  }
                }}
              >
                ←
              </Text>
            ),
          })}
        />
        <Stack.Screen name="RolComerciante" component={RolComercianteScreen} />
        <Stack.Screen name="SolicitudPrestamo" component={SolicitudPrestamoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

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

// Importar las pantallas adicionales del proveedor
import ClientesScreen from '../screens/ClientesScreen';
import HistorialEnviosScreen from '../screens/HistorialEnviosScreen';
import ComprobantesPagos from '../screens/ComprobantesPagos';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RegistroUsuario" component={RegistroUsuarioScreen} />
        
        {/* ProveedorScreen con navegación personalizada */}
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
        
        {/* Otras pantallas */}
        <Stack.Screen name="RolComerciante" component={RolComercianteScreen} />
        <Stack.Screen name="SolicitudPrestamo" component={SolicitudPrestamoScreen} />

        {/* Pantallas adicionales */}
        <Stack.Screen name="ClientesScreen" component={ClientesScreen} />
        <Stack.Screen name="HistorialEnvios" component={HistorialEnviosScreen} />
        <Stack.Screen name="ComprobantesPagos" component={ComprobantesPagos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

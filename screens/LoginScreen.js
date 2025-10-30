// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LogoMinerchant from '../assets/LogoMinerchant.png';
// Usa Ionicons (ya instalado)
import { Ionicons } from '@expo/vector-icons';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí va la lógica de autenticación
    navigation.replace('Proveedor'); // Cambia según tu flujo de navegación
  };

  return (
    <LinearGradient
      colors={["#233B63", "#3A578C", "#E0EFFF"]}
      style={styles.gradient}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.logoContainer}>
        <View style={styles.logoCard}>
          <Image source={LogoMinerchant} style={styles.logoImg} resizeMode="contain" />
        </View>
        <Text style={styles.logoText}>MINERCHANT</Text>
      </View>

      {/* "Tabs" visuales arriba del formulario */}
      <View style={styles.tabsContainer}>
        <View style={styles.tabActive}><Text style={styles.tabTextActive}>Iniciar sesión</Text></View>
        <TouchableOpacity>
          <Text style={styles.tabTextInactive}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formCard}>
        <View style={{alignItems:'center', marginBottom:16}}>
          <Ionicons name="person-outline" size={32} color="#233B63" />
        </View>
        <Text style={styles.label}>Correo electronico</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electronico"
          placeholderTextColor="#99A3BA"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#99A3BA"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => alert('Recuperar contraseña')}>
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <LinearGradient colors={["#3066BE", "#5391F6"]} style={styles.buttonGradient} start={{x:0,y:0}} end={{x:1,y:0}}>
          <TouchableOpacity style={{width:'100%'}} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity onPress={() => navigation.navigate('RegistroUsuario')} style={{marginTop:8}}>
          <Text style={styles.registerLink}>¿No tienes cuenta? <Text style={{textDecorationLine:'underline'}}>Registrarse</Text></Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 44,
    marginBottom: 24,
  },
  logoCard: {
    backgroundColor: '#233B63',
    width: 120,
    height: 120,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    elevation: 8,
    shadowColor: '#233B63',
    shadowRadius: 16,
    shadowOpacity: 0.33,
    shadowOffset: { width: 4, height: 8 },
  },
  logoImg: {
    width: 80,
    height: 80,
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop:4,
    textShadowColor: '#233B63',
    textShadowOffset: {width:1, height:1},
    textShadowRadius:1
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
  tabActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
    marginRight: 30,
    paddingBottom: 2,
  },
  tabTextActive: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  tabTextInactive: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    opacity: 0.8,
  },
  formCard: {
    backgroundColor: 'rgba(255,255,255,0.73)',
    padding: 22,
    borderRadius: 16,
    marginHorizontal: 16,
    shadowColor: '#233B63',
    shadowOpacity: 0.16,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 7 },
    marginTop: 4,
    marginBottom: 18
  },
  label: {
    marginLeft: 6,
    fontWeight: 'bold',
    color: '#222A36',
    fontSize: 15,
    marginBottom: 2,
    marginTop: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#223B63',
    height: 46,
    fontSize: 16,
    marginBottom: 14,
    paddingHorizontal: 2,
    color: '#223B63',
    backgroundColor: 'transparent',
  },
  forgotPassword: {
    color: '#223B63',
    textAlign: 'right',
    marginBottom: 16,
    fontWeight: '500',
  },
  buttonGradient: {
    borderRadius: 8,
    overflow:'hidden',
    marginTop: 4,
    marginBottom: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 16,
    textShadowColor: '#233B63',
    textShadowOffset: {width:1, height:1},
    textShadowRadius:6,
  },
  registerLink: {
    textAlign: 'center',
    color: '#223B63',
    opacity: 0.8,
    fontSize: 14,
    marginTop: 10,
  },
});

export default LoginScreen;

// screens/RegistroUsuarioScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LogoMinerchant from '../assets/LogoMinerchant.png';
import { Ionicons } from '@expo/vector-icons';

function RegistroUsuarioScreen({ navigation }) {
  // Estados para cada campo
  const [nombre, setNombre] = useState('');
  const [apPaterno, setApPaterno] = useState('');
  const [apMaterno, setApMaterno] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí iría la lógica de registro
    navigation.replace('Login');
  };

  return (
    <LinearGradient
      colors={["#233B63", "#3A578C", "#E0EFFF"]}
      style={styles.gradient}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.logoContainer}>
          <View style={styles.logoCard}>
            <Image source={LogoMinerchant} style={styles.logoImg} resizeMode="contain" />
          </View>
          <Text style={styles.logoText}>MINERCHANT</Text>
        </View>
        <View style={styles.tabsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.tabTextInactive}>Iniciar sesión</Text>
          </TouchableOpacity>
          <View style={styles.tabActive}><Text style={styles.tabTextActive}>Registrarse</Text></View>
        </View>
        <View style={styles.formCard}>
          <View style={{alignItems:'center', marginBottom:16}}>
            <Ionicons name="person-outline" size={32} color="#233B63" />
          </View>

          {/* Nombre */}
          <Text style={styles.label}>Nombre <Text style={{color:'#E54343'}}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor="#A8B0C0"
            value={nombre}
            onChangeText={setNombre}
          />

          {/* Apellido Paterno */}
          <Text style={styles.label}>Apellido Paterno <Text style={{color:'#E54343'}}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Apellido Paterno"
            placeholderTextColor="#A8B0C0"
            value={apPaterno}
            onChangeText={setApPaterno}
          />

          {/* Apellido Materno */}
          <Text style={styles.label}>Apellido Materno <Text style={{color:'#E54343'}}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Apellido Materno"
            placeholderTextColor="#A8B0C0"
            value={apMaterno}
            onChangeText={setApMaterno}
          />

          {/* Usuario */}
          <Text style={styles.label}>Usuario</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            placeholderTextColor="#A8B0C0"
            value={usuario}
            onChangeText={setUsuario}
          />

          {/* Correo electrónico */}
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#A8B0C0"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Contraseña */}
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#A8B0C0"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <LinearGradient colors={["#3066BE", "#5391F6"]} style={styles.buttonGradient} start={{x:0,y:0}} end={{x:1,y:0}}>
            <TouchableOpacity style={{width:'100%'}} onPress={handleRegister}>
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{marginTop:14}}>
          <Text style={styles.loginLink}>¿Ya tienes cuenta? <Text style={{textDecorationLine:'underline'}}>Iniciar sesión</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RegistroProveedor')} style={{marginTop:8}}>
          <Text style={[styles.loginLink, {color:'#0043A7', fontWeight:'bold'}]}>¿Eres proveedor? ¡Regístrate aquí!</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 32,
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
    marginLeft: 30,
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
    height: 44,
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 2,
    color: '#223B63',
    backgroundColor: 'transparent',
  },
  buttonGradient: {
    borderRadius: 8,
    overflow:'hidden',
    marginTop: 10,
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
  loginLink: {
    textAlign: 'center',
    color: '#233B63',
    opacity: 0.8,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 6
  },
});

export default RegistroUsuarioScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Platform, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

function RegistroProveedorScreen({ navigation }) {
  // Estados de formulario
  const [nombre, setNombre] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [fotoFrente, setFotoFrente] = useState(null);
  const [fotoReverso, setFotoReverso] = useState(null);
  const [email, setEmail] = useState('');

  const solicitarPermisosYCamara = async (onCapture) => {
    if (Platform.OS === 'web') {
      Alert.alert('Cámara no disponible', 'La cámara no está disponible en web con este flujo. Usa un dispositivo móvil.');
      return;
    }
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso requerido', 'Otorga permiso a la cámara para continuar.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 0.7,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      onCapture(result.assets[0].uri);
    }
  };

  const handleFotos = (tipo) => {
    if (tipo === 'frente') {
      solicitarPermisosYCamara(setFotoFrente);
    } else {
      solicitarPermisosYCamara(setFotoReverso);
    }
  };

  const handleRegistrar = () => {
    // Lógica para enviar la información
    navigation.goBack(); // O navegación apropiada
  };

  return (
    <LinearGradient
      colors={["#233B63", "#3A578C", "#E0EFFF"]}
      style={styles.gradient}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <Text style={styles.titulo}>Registro e Identidad</Text>
        <View style={styles.formCard}>
          {/* Nombre */}
          <Text style={styles.label}>Nombre <Text style={{color:'#E54343'}}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor="#A8B0C0"
            value={nombre}
            onChangeText={setNombre}
          />
          {/* Puesto/local */}
          <Text style={styles.label}>Puesto/local <Text style={{color:'#E54343'}}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Domicilio"
            placeholderTextColor="#A8B0C0"
            value={domicilio}
            onChangeText={setDomicilio}
          />
          <View style={styles.separator}/>
          {/* Fotos o INE */}
          <Text style={styles.label}>Foto o INE<Text style={{color:'#E54343'}}>*</Text></Text>
          <View style={{flexDirection:'row', justifyContent:'space-evenly', marginVertical:10}}>
            <TouchableOpacity style={styles.fotoBtn} onPress={() => handleFotos('frente')}>
              {fotoFrente ? (
                <Image source={{ uri: fotoFrente }} style={styles.fotoImg} />
              ) : (
                <Ionicons name="add-circle-outline" size={36} color="#233B63" />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.fotoBtn} onPress={() => handleFotos('reverso')}>
              {fotoReverso ? (
                <Image source={{ uri: fotoReverso }} style={styles.fotoImg} />
              ) : (
                <Ionicons name="add-circle-outline" size={36} color="#233B63" />
              )}
            </TouchableOpacity>
          </View>
          {/* Correo electrónico */}
          <Text style={styles.label}>Correo electronico <Text style={{color:'#E54343'}}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Correo"
            placeholderTextColor="#A8B0C0"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <LinearGradient colors={["#3066BE", "#5391F6"]} style={styles.buttonGradient} start={{x:0,y:0}} end={{x:1,y:0}}>
            <TouchableOpacity style={{width:'100%'}} onPress={handleRegistrar}>
              <Text style={styles.buttonText}>Crear identidad verificada</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
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
  titulo: {
    fontSize: 22,
    color: '#FFF',
    marginTop: 48,
    marginBottom: 22,
    textAlign:'center',
    fontWeight:'600',
    letterSpacing: 0.1
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
    marginTop: 8,
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
  fotoBtn: {
    width: 68,
    height: 68,
    borderWidth: 1,
    borderColor: '#A8B0C0',
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6
  },
  fotoImg: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#AFB2BE',
    marginVertical: 12,
    opacity: 0.5
  },
  buttonGradient: {
    borderRadius: 8,
    overflow:'hidden',
    marginTop: 22,
    marginBottom: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
    textShadowColor: '#233B63',
    textShadowOffset: {width:1, height:1},
    textShadowRadius:6,
  },
});

export default RegistroProveedorScreen;

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const solicitudes = [
  { id: '1', nombre: 'Nombre completo Usuario', tiempo: '2 min' },
  { id: '2', nombre: 'Nombre completo Usuario', tiempo: '2 min' },
  { id: '3', nombre: 'Nombre completo Usuario', tiempo: '2 min' },
  { id: '4', nombre: 'Nombre completo Usuario', tiempo: '2 min' },
];

function ClientesScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <FontAwesome5 name="file-alt" size={34} color="#1E3A8A" />
      </View>
      <View style={styles.cardMiddle}>
        <Text style={styles.cardTitle}>Solicitud de Préstamo</Text>
        <Text style={styles.cardSubtitle}>De: {item.nombre}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Solicitud</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.cardTime}>{item.tiempo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="user-circle" size={30} color="#DCE6F8" style={styles.profileIcon} />
        <Text style={styles.welcome}>¡Bienvenido prestamista!</Text>
      </View>

      <Text style={styles.sectionTitle}>Solicitudes</Text>

      <FlatList
        data={solicitudes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#233A72', // azul oscuro superior
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileIcon: {
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  list: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#E8EDF5',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardLeft: {
    marginRight: 12,
  },
  cardMiddle: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#111827',
  },
  cardSubtitle: {
    color: '#6B7280',
    marginBottom: 6,
  },
  cardTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  button: {
    backgroundColor: '#3B4C78',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#DCE6F8',
    fontWeight: '600',
    fontSize: 13,
  },
});


export default ClientesScreen;

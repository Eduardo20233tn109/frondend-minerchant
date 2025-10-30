import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

function ProveedorScreen({ navigation }) {
  const user = {
    nombre: "Nombre Completo Usuario",
    usuario: "@NombreUsuario",
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>¡Bienvenido proveedor!</Text>
        <TouchableOpacity style={styles.profileIcon}>
          <Feather name="user" size={34} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Datos del usuario */}
      <View style={styles.userSection}>
        <Feather name="user" size={90} color="#fff" />
        <Text style={styles.userName}>{user.nombre}</Text>
        <Text style={styles.userHandle}>{user.usuario}</Text>
      </View>

      {/* Opciones principales */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => navigation.navigate("ClientesScreen")}
        >
          <AntDesign name="shop" size={32} color="#1E3A8A" />{" "}
          <Text style={styles.menuText}>Clientes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => navigation.navigate("HistorialEnvios")}
        >
          <AntDesign name="history" size={32} color="#1E3A8A" />
          <Text style={styles.menuText}>Historial</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => navigation.navigate("ComprobantesPagos")}
        >
          <FontAwesome5 name="ticket-alt" size={32} color="#1E3A8A" />{" "}
          <Text style={styles.menuText}>Comprobantes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B5BA9", // Azul sólido de fondo (puedes ajustar al tono de tu paleta)
    alignItems: "center",
    paddingTop: 60,
  },
  header: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcomeText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  profileIcon: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 30,
    padding: 6,
  },
  userSection: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginTop: 10,
  },
  userHandle: {
    fontSize: 14,
    color: "#d1d5db",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  menuCard: {
    backgroundColor: "#F8FAFC",
    borderRadius: 16,
    width: "30%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  menuText: {
    color: "#1E3A8A",
    fontWeight: "500",
    marginTop: 8,
  },
});

export default ProveedorScreen;

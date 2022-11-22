import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
export default function Actions() {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate("Calendario")}
      >
        <View style={styles.areaButton}>
          <FontAwesome name="calendar" size={24} color="black" />
        </View>
        <Text style={styles.labelButton}>Calendário</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <MaterialIcons name="schedule" size={24} color="black" />
        </View>
        <Text style={styles.labelButton}>Agendas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Fontisto name="favorite" size={24} color="black" />
        </View>
        <Text style={styles.labelButton}>Favorito</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate("Config")}
      >
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Conta </Text>
      </TouchableOpacity>
      <Text></Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
    paddingEnd: 14,
    paddingEnd: 14,
    paddingStart: 14,
    backgroundColor: "#38A69D",
  },
  actionButton: {
    alignItems: "center",
    marginRight: 32,
  },
  areaButton: {
    backgroundColor: "#ecf0f1",
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  labelButton: {
    marginTop: 90,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
});

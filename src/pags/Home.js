import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import Header from "../components/Header";
import Agendas from "../components/Header/Agendas/index";
import Movimentos from "../components/Movimentos";
import Actions from "../components/Actions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Login from "./Casdastro";
import { AuthContext } from "../contexts/auth";

const list = [
  {
    id: 1,
    label: "IFCE Campus Canindé",
    value: "Aberto",
    type: "Aberto",
  },
  {
    id: 2,
    label: "EEF Senador Carlos Jereissati",
    value: "Fechado",

    type: 1,
  },
  {
    id: 3,
    label: "Ginasio Paulo Sarasate",
    value: "Fechado",

    type: 1,
  },
  {
    id: 4,
    label: "Space Inova",
    value: "Aberto",

    type: "Aberto",
  },
  {
    id: 5,
    label: "Frei Orlando",
    value: "Fechado",

    type: 1,
  },
  {
    id: 6,
    label: "Campo do SAAE",
    value: "Aberto",

    type: "Aberto",
  },
];

export default function Home() {
  const { nome } = useContext(AuthContext);
  const [nomeField, setNomeField] = useState(nomeField);
  const navigation = useNavigation();
  function handlelogin(e) {
    e.preventDefault();
    navigation.navigate("Cadastro");

    return;
  }

  return (
    <View style={styles.container}>
      <Header nome={nomeField} />

      <Actions />
      <Text style={styles.title}>Lista de Locais Disponiveis</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Movimentos data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 14,
    marginLeft: 10,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#38A69D",
  },
  list: {
    marginStart: 14,
    marginEnd: 14,

    flex: 0,
  },
});

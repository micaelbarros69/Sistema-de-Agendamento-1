import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function Config() {
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const navigation = useNavigation();

  function lougout() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email</Text>
      <TextInput
        placeholder="Digite seu email..."
        style={styles.input}
        value={emailField}
        onChangeText={(emailField) => {
          setEmailField(emailField);
        }}
      />
      <Text style={styles.title}>Senha</Text>
      <View style={styles.area}>
        <TextInput
          placeholder="Digite sua senha..."
          style={styles.input}
          value={passwordField}
          onChangeText={(passwordField) => {
            setPasswordField(passwordField);
          }}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText} onPress={lougout}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

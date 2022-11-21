import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  form,
  Alert,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { auth } from "../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigation = useNavigation();
  const [hidePass, setHidePass] = useState(true);
  const [emailField, setEmailField] = useState("");

  const [passwordField, setPasswordField] = useState("");

  // const handlelogin = () => {
  //   if (emailField != "" && passwordField != "") {
  //   } else {
  //     alert("Preencha os campos");
  //   }
  // };

  function handlelogin(e) {
    e.preventDefault();

    if (emailField === "" || passwordField === "") {
      Alert.alert("Acorda ai Amigo", "Esqueceu de Preenche os Campos!");

      return;
    }

    signInWithEmailAndPassword(auth, emailField, passwordField)
      .then(() => {
        navigation.navigate("Home");
      })
      .catch(() => {
        Alert.alert("Acorda ai Amigo", "Email ou Senha Errado");
      });
  }

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-Vindo</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        style={styles.containerForm}
        onSubmit={handlelogin}
      >
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite seu email..."
          style={styles.input}
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />
        <Text style={styles.title}>Senha</Text>
        <View style={styles.area}>
          <TextInput
            placeholder="Digite sua senha..."
            style={styles.input}
            value={passwordField}
            onChangeText={(t) => setPasswordField(t)}
            secureTextEntry={hidePass}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setHidePass(!hidePass)}
          >
            {hidePass ? (
              <Ionicons name="eye" color="black" size={25} />
            ) : (
              <Ionicons name="eye-off" color="black" size={25} />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlelogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.registerText}>
            Não possue uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  containerForm: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  area: {
    flexDirection: "row",
    with: "90%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
  },
  input: {
    width: "85%",
    color: "black",
    padding: 8,
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  icon: {
    width: "15%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#38a69d",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "center",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerText: {
    color: "#a1a1a1",
  },
});

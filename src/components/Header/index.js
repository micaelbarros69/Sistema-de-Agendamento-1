import "react-native-reanimated";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { MotiView, MotiText } from "moti";

const statusBarHeigth = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header({ nome }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{nome}</Text>
        <TouchableOpacity style={styles.buttonuser}>
          <Feather name="user" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#38A69D",
    paddingTop: statusBarHeigth,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 40,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonuser: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40 / 2,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

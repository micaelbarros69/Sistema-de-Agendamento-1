import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Agendas({ Locais, Favorito }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Agendados</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.currencySymbol}></Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Resevardo</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.currencySymbol}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: 24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  itemTitle: {
    fontSize: 20,
    color: "#dadada",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencySymbol: {
    color: "#dadada",
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: "#2ecc71",
  },
  expense: {
    fontSize: 22,
    color: "red",
  },
});

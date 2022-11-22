import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-datepicker";
export default function Calendario() {
  state = {
    data: "",
  };

  changeDate = (valor) => {
    this.setState({
      data: valor,
    });
  };

  return (
    <View style={styles.container}>
      <DatePicker
        format="DD/MM/YYYY"
        style={styles.dateComponente}
        date={this.state.data}
        onDateChange={this.changeDate}
      />

      <Text>
        {this.state.data && <Text> Data Selecionada: {this.state.data}</Text>}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1",
    alignItems: "center",
    justifyContent: "center",
  },
  dateComponente: {
    width: 350,
  },
});

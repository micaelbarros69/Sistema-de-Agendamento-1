import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Slider from "../components/Slider";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const images = [
  "http://urupes.sp.gov.br/noticias/upload/postagens/1636122729_84865.jpg",
  "https://badybassitt.sp.gov.br/media/capas/348a7e0853656004c2d01867700a7dbf.jpg",
  "https://badybassitt.sp.gov.br/media/files/projeto_areninhas_50304767328_o.jpg",
];
const statusBarHeigth = StatusBar.currentHeight
  ? StatusBar.currentHeight + 10
  : 64;

export default class Index extends React.Component {
  render() {
    return (
      <View style={style.container}>
        {/* <MaterialIcons
          style={style.button}
          name="arrow-back-ios"
          size={30}
          color="black"
        /> */}
        <Text style={style.Text}>Campo do SAAE Canindé</Text>
        <View style={style.quadras}>
          <Slider images={images} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#38A69D",
    paddingTop: statusBarHeigth,
    flexDirection: "row",
    paddingStart: 0,
    paddingEnd: 0,
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 30,
    marginLeft: 85,
    marginRight: "auto",
    color: "#black",
  },
  quadras: {
    marginTop: 50,
  },
  button: {
    paddingStart: 10,
  },
});

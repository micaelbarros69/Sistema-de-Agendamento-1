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
  "https://cdn.abcdoabc.com.br/quadra-poliesportiva-25-08_404c8352.jpg",
  "https://sedu.es.gov.br/Media/sedu/_Profiles/c4d8c6e6/982b8e1d/quadra%20poliesportiva.jpg?v=637783892335781080",
  "http://3.bp.blogspot.com/-mZzLUs-gDfI/U-ExyqrxqtI/AAAAAAAAA-c/WBfYlOqb7Sk/s1600/IMG0414A.jpg",
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
        <Text style={style.Text}>EEF Senador Carlos Jereissati</Text>
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
    marginLeft: 65,
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

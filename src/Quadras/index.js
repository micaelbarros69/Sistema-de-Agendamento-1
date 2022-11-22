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
  "https://1.bp.blogspot.com/-92DAcUgjPLU/WNRkSfqhsKI/AAAAAAAAGJU/U9G-qQ0PuNk75Bv6a4laVaQKNUKgoqNiwCEw/s1600/IMG_20170323_170237582.jpg",
  "https://3.bp.blogspot.com/-DpAbzC8If6g/WNRkH18CQsI/AAAAAAAAGJI/owL8QSo723Mtsu2FS06O3RmT1bDmWCd3gCEw/s1600/IMG_20170323_102233185.jpg",
  "https://1.bp.blogspot.com/-UXDwvVIwqeI/WNRjVKet1FI/AAAAAAAAGJM/WWYs9UyImbolXrOjShZpYWfjSVMRAUm6QCEw/s1600/IMG_20170323_153819917.jpg",
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
        <Text style={style.Text}>IFCE Campus Canindé</Text>
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
    marginLeft: 100,
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

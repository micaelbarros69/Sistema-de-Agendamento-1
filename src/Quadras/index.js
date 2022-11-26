
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

import React, {component} from 'react';
import {createOpenLink} from 'react-native-open-maps';
import { Ionicons } from "@expo/vector-icons";

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
      
        <View style={style.containerForm}>
          <TouchableOpacity style= {style.areaButton} onPress={createOpenLink({latitude: -4.390715572004602, longitude: -39.312676172006725})}>
            <View style={style.locationButton}>
            <Ionicons name="location" size={70} color='#B40000' style={style.shadow}  />
        </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const style = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#38a69d",
},
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: -30,
    marginLeft: 100,
    marginRight: "auto",
    color: "#black",
  },
  quadras: {
    marginTop: 50,
  },
  containerForm: {
    backgroundColor: "#fff",
    flex: 1,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  button: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "center",
  },
  areaButton: {
    alignItems: "center",
    marginLeft: 255,
    marginTop: 390,
  },

  locationButton: {

    alignItems: "center",
    marginTop:0,
    position: 'relative',
  },

  shadow: {
    textShadowColor: '#a6a6a6',
    textShadowOpacity: .50,
    textShadowRadius: 20,
    textShadowOffset: {
      width: -2,
      height: 5,
    }
    },
});


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

        <View style={style.containerForm}>
          <TouchableOpacity style= {style.areaButton} onPress={createOpenLink({latitude: -4.355187564661592, longitude:-39.31946635608429})}>
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

  containerForm: {
    backgroundColor: "#fff",
    flex: 1,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: -30,
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

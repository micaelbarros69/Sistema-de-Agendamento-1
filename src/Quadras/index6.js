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
        <View style={style.containerForm}>
          <TouchableOpacity style= {style.areaButton} onPress={createOpenLink({latitude: -4.346828802909374,  longitude:-39.30087387449915})}>
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
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: -30,
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

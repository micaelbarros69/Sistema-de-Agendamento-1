
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
  "https://srecampobelo.educacao.mg.gov.br/images/QUADRASBARBACENA.jpg",
  "https://srecampobelo.educacao.mg.gov.br/images/QUADRAPAPAGAIOSSS.jpg",
  "https://www.arapongas.pr.gov.br/imagens/noticias/e3b251ccd8307bc40c1bc86aebc58623.jpg",
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
        <Text style={style.Text}>Ginasio Paulo Sarasate</Text>
        <View style={style.quadras}>
          <Slider images={images} />
        </View>
        <View style={style.containerForm}>
          <TouchableOpacity style= {style.areaButton} onPress={createOpenLink({latitude: -4.351050019421244, longitude: -39.309978403335094})}>
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
    marginLeft: 95,
    marginRight: "auto",
    color: "#black",
  },
  quadras: {
    marginTop: 50,
  },
  button: {
    paddingStart: 10,
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
});

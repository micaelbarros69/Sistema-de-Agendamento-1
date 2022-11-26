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
  "https://www.plastprime.com/wp-content/uploads/2019/02/Col%C3%A9gio-em-Curitiba-1-1066x800.jpg",
  "https://www.plastprime.com/wp-content/uploads/2019/02/Clube-dores-1200x800.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlK8isFGAc4aH21huGUuypMqSHREA2wy54ecSFXGBJlAQqY0QOtVi8f1YBDD1kV_FwmME&usqp=CAU",
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
        <Text style={style.Text}>Escola Frei Orlando Canindé</Text>
        <View style={style.quadras}>
          <Slider images={images} />
        </View>
        <View style={style.containerForm}>
          <TouchableOpacity style= {style.areaButton} onPress={createOpenLink({latitude: -4.351931596828731,  longitude:-39.3120057475151})}>
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
    marginLeft: 70,
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

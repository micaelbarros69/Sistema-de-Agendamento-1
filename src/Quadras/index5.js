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
import * as Animatable from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";
import { createOpenLink } from "react-native-open-maps";
import Agenda from "../components/agendamento";
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
        <View delay={600} animation="fadeInUp" style={style.containerform}>
          <Text style={style.title}>Escolha um dia para seu Agendamento</Text>
          <Agenda style={style.Agenda} />
        </View>
        <View style={style.containerform}>
          <View style={style.locationButton}>
            <Ionicons
              name="location"
              size={70}
              color="#B40000"
              style={style.shadow}
              onPress={createOpenLink({
                latitude: -4.351931596828731,
                longitude: -39.3120057475151,
              })}
            />
            <Text style={style.labelButton}>Ver Localização no Maps</Text>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38A69D",
    paddingTop: statusBarHeigth,
    flexDirection: "column",
    paddingStart: 0,
    paddingEnd: 0,
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 30,
    marginLeft: 70,
    marginRight: "auto",
    color: "#black",
  },
  quadras: {
    marginTop: 10,
  },
  containerform: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontsize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  button: {
    position: "absolute",
    backgroundColor: "#38a69d",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  locationButton: {
    alignItems: "center",
    marginLeft: 0,
    marginRight: "auto",
    marginTop: 100,
    backgroundColor: "#fff",
  },

  shadow: {
    textShadowColor: "#a6a6a6",
    textShadowOpacity: 0.5,
    textShadowRadius: 20,
    textShadowOffset: {
      width: -2,
      height: 5,
    },
  },
  labelButton: {
    fontWeight: "bold",
    color: "black",
    marginLeft: 15,
  },
});

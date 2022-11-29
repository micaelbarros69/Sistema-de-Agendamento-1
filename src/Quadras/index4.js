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
  "https://www.informecidade.com.br/images/noticias/5987/13ee1107265901888601a61b75472409.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgjw57kiHA2Tgx-lnGUeg0xqw1aYUJFNniOzcnSIyylInaDCqmpVnYmwaFSu9jyLHVS8&usqp=CAU",
  "https://www.informecidade.com.br/images/noticias/4172/3bff55297aa5f0fa6fc10dc22aacae9f.jpg",
  "https://pr1.nicelocal.br.com/zZHkxL0ErJzvN4ckUvJYeg/330x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2X3iIf4IrCZ6_berx83rhbg8aBugQbVz169qYGDPcxLKztu6V-G_E6_7eafg_5EOCA",
  "https://mapio.net/images-p/47012503.jpg",
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
        <Text style={style.Text}>Space Inova Canindé</Text>
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
                latitude: -4.364469950242562,
                longitude: -39.32862090269486,
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
    marginLeft: 100,
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

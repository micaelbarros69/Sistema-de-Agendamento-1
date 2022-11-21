import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BemVindo from "../pags/BemVindo";
import Login from "../pags/Login";
import Home from "../pags/Home";
import Calendario from "../pags/Calendario";
import Cadastro from "../pags/Casdastro";
import Quadras from "../Quadras/index";
import Quadras2 from "../Quadras/index2";
import Quadras3 from "../Quadras/index3";
import Quadras4 from "../Quadras/index4";
import Quadras5 from "../Quadras/index5";
import Quadras6 from "../Quadras/index6";
const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="BemVindo"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="BemVindo"
        component={BemVindo}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Calendario"
        component={Calendario}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quadras"
        component={Quadras}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quadras2"
        component={Quadras2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quadras3"
        component={Quadras3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quadras4"
        component={Quadras4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quadras5"
        component={Quadras5}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quadras6"
        component={Quadras6}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

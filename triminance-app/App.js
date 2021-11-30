import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { useFonts } from 'expo-font';

enableScreens();

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/screens/Login";
import Registro from "./app/screens/Registro";
import Inicio from "./app/screens/Inicio";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    GraviolaSoftMedium: require('./assets/fonts/GraviolaSoft-Medium.otf'),
    RubikRegular: require('./assets/fonts/Rubik-Regular.ttf'),
    RubikBold: require('./assets/fonts/Rubik-Bold.ttf'),
    GraviolaRegular: require('./assets/fonts/Graviola-Regular.otf')
  });
  
  if (!loaded) {
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

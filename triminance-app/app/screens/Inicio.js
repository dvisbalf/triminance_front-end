import React from "react";
import { View, Text, StyleSheet, SafeAreaView,TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LOGO from "../../assets/img/LOGO.svg";
<<<<<<< HEAD
=======

>>>>>>> main

const Inicio = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient colors={["#EA0451", "#FF682F"]} style={style.gradient}>
          <View style={style.flex}>
            <LOGO style={style.logo} />
<<<<<<< HEAD
            <TouchableHighlight 
            style={style.inputext2}
            onPress={() => navigation.navigate("Ingresos")}
          >
            <Text style={style.inputinside}>ACCEDER</Text>
          </TouchableHighlight>
=======
            <Text>Hola,usuario</Text>
>>>>>>> main
          </View>
        </LinearGradient>
    </SafeAreaView>
  );
};

export default Inicio;

const style = StyleSheet.create({
  gradient: {
    width: "100%",
    height: 226,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  logo: {
    marginTop: 42,
    marginLeft: "45%",
    marginBottom: 17,
  },
  flex: {
    flexDirection: "row",
  },
  inputinside: {
    color: "#FFFFFF",
    fontFamily: "RubikBold",
  },
});

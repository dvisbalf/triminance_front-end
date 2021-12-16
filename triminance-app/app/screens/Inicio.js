import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LOGO from "../../assets/img/LOGO.svg";


const Inicio = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient colors={["#EA0451", "#FF682F"]} style={style.gradient}>
          <View style={style.flex}>
            <LOGO style={style.logo} />
            <Text>Hola,usuario</Text>
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
});

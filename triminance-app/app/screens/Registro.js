import React, { useState } from "react";
import {
  TouchableHighlight,
  TextInput,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import LOGO from "../../assets/img/LOGO.svg";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import { CheckBox } from "react-native-elements";

const Registro = () => {
  const [selectedValue, setSelectedValue] = useState("pais");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={stylesR.container}>
        <LinearGradient
          colors={["#EA0451", "#FF682F"]}
          style={stylesR.gradient}
        >
          <LOGO style={stylesR.logo} />
          <Text style={stylesR.text2}>El dinero de tus sueños,</Text>
          <Text style={stylesR.text3}> al precio justo.</Text>
        </LinearGradient>

        <Text style={stylesR.text}>Registro de Usuario</Text>

        <View>
          <TextInput
            style={stylesR.border}
            name="email"
            type="email"
            placeholder="Email"
            required
          />

          <TextInput
            style={stylesR.border}
            name="Cemail"
            type="email"
            placeholder="Confirmar email"
            required
          />

          <TextInput
            style={stylesR.border}
            name="telefono"
            type="number"
            placeholder="Telefono movil"
            required
          />

          <TextInput
            style={stylesR.border}
            name="user"
            type="text"
            placeholder="Usuario"
            required
          />

          <View style={stylesR.comboborde}>
            <Picker
              selectedValue={selectedValue}
              style={stylesR.pais}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              required
            >
              <Picker.Item label="Pais" value="" />
              <Picker.Item label="java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>

          <View style={stylesR.comboborde}>
            <Picker
              style={stylesR.pais}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              required
            >
              <Picker.Item label="Estado" value="" />
              <Picker.Item label="java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>

          <View style={stylesR.comboborde}>
            <Picker
              selectedValue={selectedValue}
              style={stylesR.pais}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              required
            >
              <Picker.Item label="Ciudad" value="" />
              <Picker.Item label="java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>

          <CheckBox
          center 
          title="Certifico que estoy de acuerdo con los"
          
          />

          <Text>términos y condiciones</Text>

          <TouchableHighlight>
            <Text>Registrarse</Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight>
          <Text>Volver</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Registro;

const stylesR = StyleSheet.create({
  header: {
    paddingTop: 35,
    opacity: 1,
    color: "#fff",
    fontSize: 15,
    paddingBottom: "10%",
    textAlign: "center",
    borderBottomRightRadius: 117,
    borderBottomLeftRadius: 117,
  },

  container: {
    flex: 1,
    backgroundColor: "white",
  },

  gradient: {
    width: "100%",
    height: 226,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  text: {
    color: "#002D75",
    fontSize: 30,
    textAlign: "center",
    marginTop: "5%",
  },

  text2: {
    color: "white",
    paddingLeft: "16%",
    fontSize: 30,
  },

  text3: {
    color: "white",
    paddingLeft: "27%",
    fontSize: 30,
  },

  logo: {
    height: 70,
    width: 70,
    marginTop:'10%',
    marginLeft: "43%",
    marginBottom:'3%',
  },

  centrado: {
    alignItems: "center",
    textAlign: "center",
  },

  border: {
    borderWidth: 1,
    borderRadius: 60,
    paddingLeft: 10,
    marginLeft: "7%",
    marginRight: "7%",
    marginTop: "6%",
    paddingTop: 4,
    paddingBottom:2
  },

  terminos: {
    flexDirection: "row",
    marginLeft: "13%",
  },

  alinear: {
    marginTop: "4%",
    fontSize: 17,
  },

  pais: {
    height: 28,
    color: "black",
    margin:0,
  },
  comboborde: {
    borderRadius: 60,
    paddingLeft: 10,
    marginLeft: "7%",
    marginRight: "7%",
    marginTop: "6%",
    borderColor: "black",
    borderWidth: 1,
    paddingBottom:8,
    paddingTop:0,    
  },
});

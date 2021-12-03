import React, { useState } from "react";
import {
  TouchableHighlight,
  TextInput,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Pressable
} from "react-native";
import LOGO from "../../assets/img/LOGO.svg";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function MyCheckbox() {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <Pressable
      style={[stylesR.checkboxBase, checked && stylesR.checkboxChecked]}
      onPress={onCheckmarkPress}>
      {checked && <MaterialCommunityIcons name="check-bold" size={10} color="#EA0451" />}
    </Pressable>
  );
}

const Registro = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

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
            placeholder="Confirma email"
            required
          />

          <TextInput
            style={stylesR.border}
            name="telefono"
            type="number"
            placeholder="Teléfono movil"
            required
          />

          <TextInput
            style={stylesR.border}
            name="user"
            type="text"
            placeholder="Nombre Usuario"
            required
          />

          <View style={stylesR.border}>
          <Picker     
            style={stylesR.pais}
            mode="dropdown"
            dropdownIconColor="#D5D5D5"
            dropdownIconRippleColor="#D5D5D5"
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
          }>
            <Picker.Item label="Pais" value="pais" />
            <Picker.Item label="Colombia" value="colombia" />
          </Picker>
          </View>

          <View style={stylesR.border}>
          <Picker     
            style={stylesR.pais}
            mode="dropdown"
            dropdownIconColor="#D5D5D5"
            dropdownIconRippleColor="#D5D5D5"
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
          }>
            <Picker.Item label="Estado" value="estado" />
            <Picker.Item label="No se que va aqui xd" value="state" />
          </Picker>
          </View>

          <View style={stylesR.border}>
          <Picker     
            style={stylesR.pais}
            mode="dropdown"
            dropdownIconColor="#D5D5D5"
            dropdownIconRippleColor="#D5D5D5"
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
          }>
            <Picker.Item label="Ciudad" value="ciudad" />
            <Picker.Item label="Barranquilla" value="barranquilla" />
          </Picker>
          </View>
          
          <View style={stylesR.terminos1}>
          <MyCheckbox 
          />
          <Text>Certifico que estoy de acuerdo con los</Text>
          </View>   
          <View style={stylesR.terminos2}>         
          <Text>términos y condiciones</Text>
          </View> 
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
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 115,
    marginTop: "5%"
  },

  text2: {
    color: "white",
    paddingLeft: 76,
    fontSize: 25,
  },

  text3: {
    color: "white",
    paddingLeft: 121,
    fontSize: 25,
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
    borderColor: '#D5D5D5',    
    borderWidth: 1,
    borderRadius: 60,
    paddingLeft: 35,
    marginLeft: 39,
    marginRight: 38,
    marginTop: "6%",
    paddingTop: 4,
    paddingBottom:2
  },

  checkboxBase: {
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    borderWidth: 2,
    borderColor: '#EA0451',
    
  },

  checkboxChecked: {
    backgroundColor: 'white'
  },

  checkbox: {
    marginLeft: 40
  },

  terminos1: {
    flexDirection: "row",
    marginLeft: 75,
    marginTop: 20
  },

  terminos2: {
    marginLeft: 124,
    
  },

  alinear: {
    marginTop: "4%",
    fontSize: 17,
  },

  pais: {
    height: 45,
    color: "black",
    marginLeft: -8,
    marginTop: -14,
    marginBottom: -2
    

  },
  comboborde: {
    borderRadius: 60,
    paddingLeft: 12,
    marginLeft: "7%",
    marginRight: "7%",
    marginTop: "6%",
    borderColor: "black",
    borderWidth: 1,
    paddingBottom:8,
    paddingTop:0,    
  },
});

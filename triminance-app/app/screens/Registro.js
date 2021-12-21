import React, { useState } from "react";
import {
  TouchableHighlight,
  TextInput,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import LOGO from "../../assets/img/LOGO.svg";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";


function MyCheckbox() {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <Pressable
      style={[stylesR.checkboxBase, checked && stylesR.checkboxChecked]}
      onPress={onCheckmarkPress}
    >
      {checked && (
        <MaterialCommunityIcons name="check-bold" size={10} color="#EA0451" />
      )}
    </Pressable>
  );
}

const Registro = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [dept, setDept] = useState("");
  const [city, setCity] = useState("");
  const [datacountry, setDatacountry] = useState([]);
  const [datadept, setDatadept] = useState([]);
  const [datacity, setDatacity] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJmZXJuYW5sYW1icmFubzA5QGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IjlrVzA5ekMxS2l3ZUdyNHBEdkhTNVVDaVBkeURaMHdDbjZrNEZlVE5FQXVkNVFYWDBZYTZnYXgzVkRXbGo5OExQdlEifSwiZXhwIjoxNjM5NzAxOTUyfQ.7bdVDUGRk0i99sO-3i6V-6cAQT2zn1UuAEhP5HTZt2w";
  async function getCountries() {
    const response = await axios.get(
      "https://www.universal-tutorial.com/api/countries",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    setDatacountry(response.data);
  }
  getCountries();

  async function getDepts() {
    console.log(dept);
    const response = await axios.get(
      'https://www.universal-tutorial.com/api/states/'+country,
      {

        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(response.data);
    setDatadept(response.data);
  }


  async function registrar() {
    const data = {

      id: 111111112,
      name: name,
      lastname: name,
      typeUser: "UserType",
      phone: phone,
      email: email,
      password: "password",
      userScore: 2.5,
      UserStateid: true,
      legtermstate: true,
    };
    const url = "http://45.236.129.73:8888/user/";
    console.log(data);
    const response = await axios.post(url, data);
    console.log(response.status);
    if (response.status === 201) {
      alert("Usuario registrado correctamente");
      navigation.navigate("Login");
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={stylesR.container}>
          <LinearGradient
            colors={["#EA0451", "#FF682F"]}
            style={stylesR.gradient}
          >
            <LOGO style={stylesR.logo} />
            <Text style={stylesR.text2}>
              El dinero de{" "}
              <Text style={{ fontFamily: "RubikBold" }}>tus sueños,</Text>
            </Text>
            <Text style={stylesR.text3}>
              al <Text style={{ fontFamily: "RubikBold" }}>precio justo.</Text>
            </Text>
          </LinearGradient>

          <Text style={stylesR.text}>Registro de Usuario</Text>

          <View>
            <TextInput
              style={stylesR.border}
              name="email"
              type="email"
              placeholder="Email"
              placeholderTextColor="#D5D5D5"
              required
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <TextInput
              style={stylesR.border}
              name="Cemail"
              type="email"
              placeholder="Confirma email"
              placeholderTextColor="#D5D5D5"
              required
            />

            <TextInput
              style={stylesR.border}
              name="telefono"
              type="number"
              placeholder="Teléfono movil"
              placeholderTextColor="#D5D5D5"
              required
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />

            <TextInput
              style={stylesR.border}
              name="user"
              type="text"
              placeholder="Nombre Usuario"
              placeholderTextColor="#D5D5D5"
              required
              value={name}
              onChangeText={(text) => setName(text)}
            />

            <View style={stylesR.border}>
              <Picker
                style={stylesR.pais}
                mode="dropdown"
                dropdownIconColor="#D5D5D5"
                dropdownIconRippleColor="#D5D5D5"
                selectedValue={country}
                onValueChange={(itemValue, itemIndex) => {setCountry(itemValue)
                getDepts()
                }  }
              >
                {
                  datacountry.map((pais) => (
                    <Picker.Item
                      label={pais.country_name}
                      value={pais.country_name}
                    />
                  ))
                }
              </Picker>
            </View>

            <View style={stylesR.border}>
              <Picker
                style={stylesR.pais}
                mode="dropdown"
                dropdownIconColor="#D5D5D5"
                dropdownIconRippleColor="#D5D5D5"
                selectedValue={dept}
                onValueChange={(itemValue, itemIndex) => setDept(itemValue)}
              >
                {
                  datadept.map((depto) => (
                    <Picker.Item
                      label={depto}
                      value={depto}
                    />
                  ))
                }
              </Picker>
            </View>

            <View style={stylesR.border}>
              <Picker
                style={stylesR.pais}
                mode="dropdown"
                dropdownIconColor="#D5D5D5"
                dropdownIconRippleColor="#D5D5D5"
                selectedValue={city}
                onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
              >
                <Picker.Item label="Ciudad" value="ciudad" />
                <Picker.Item label="Barranquilla" value="barranquilla" />
              </Picker>
            </View>

            <View style={stylesR.terminos1}>
              <MyCheckbox />
              <Text style={{ fontFamily: "RubikRegular" }}>
                {" "}
                Certifico que estoy de acuerdo con los
              </Text>
            </View>
            <View style={stylesR.terminos2}>
              <Text style={{ fontFamily: "RubikRegular", color: "#0439EA" }}>
                términos y condiciones
              </Text>
            </View>
          </View>

          <TouchableHighlight style={stylesR.inputext}>
            <Text
              style={stylesR.inputinside}
              onPress={() => navigation.navigate("Login")}
            >
              VOLVER
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={stylesR.inputext2}>
            <Text style={stylesR.inputinside2} onPress={() => registrar()}>
              REGISTRARME
            </Text>
          </TouchableHighlight>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registro;

const stylesR = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  gradient: {
    width: "100%",
    height: 226,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },

  text: {
    color: "#002D75",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "5%",
    fontFamily: "GraviolaSoftMedium",
  },

  text2: {
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "GraviolaSoftMedium",
  },

  text3: {
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "GraviolaSoftMedium",
  },

  logo: {
    marginTop: 42,
    marginLeft: "45%",
    marginBottom: 17,
  },

  centrado: {
    alignItems: "center",
    textAlign: "center",
  },

  border: {
    borderColor: "#D5D5D5",
    borderWidth: 1,
    borderRadius: 60,
    paddingLeft: 35,
    height: 35,
    marginLeft: 39,
    marginRight: 38,
    marginTop: "6%",
    paddingTop: 4,
    paddingBottom: 2,
    fontFamily: "RubikRegular",
    fontSize: 16,
  },

  checkboxBase: {
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#EA0451",
  },

  checkboxChecked: {
    backgroundColor: "white",
  },

  checkbox: {
    marginLeft: 40,
  },

  terminos1: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },

  terminos2: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },

  alinear: {
    marginTop: "4%",
    fontSize: 17,
  },

  pais: {
    color: "#D5D5D5",
    marginLeft: -8,
    marginTop: -15,
    marginBottom: -4,
    fontFamily: "RubikRegular",
    fontWeight: "bold",
  },

  comboborde: {
    borderRadius: 60,
    paddingLeft: 12,
    marginLeft: "7%",
    marginRight: "7%",
    marginTop: "6%",
    borderColor: "black",
    borderWidth: 1,
    paddingBottom: 8,
    paddingTop: 0,
  },

  inputext: {
    borderStyle: "solid",
    backgroundColor: "#F0F0F3",
    borderRadius: 50,
    marginRight: 38,
    height: 44,
    marginLeft: 39,
    paddingLeft: 148,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  inputext2: {
    borderStyle: "solid",
    backgroundColor: "#EA0451",
    borderRadius: 50,
    width: 175,
    height: 40,
    marginLeft: 42,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -42,
  },

  inputinside: {
    color: "#EA0451",
    fontFamily: "RubikRegular",
    fontSize: 14,
  },

  inputinside2: {
    color: "#FFFFFF",
    fontFamily: "RubikBold",
    fontSize: 14,
  },
});

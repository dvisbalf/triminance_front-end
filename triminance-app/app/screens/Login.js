import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LOGO from "../../assets/img/LOGO.svg";
import Facebook from "../../assets/img/Facebook.svg";
import Instagram from "../../assets/img/Instagram.svg";
import Twitter from "../../assets/img/Twitter.svg";
import Youtube from "../../assets/img/Youtube.svg";
import axios from "axios";


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  setEmail(email){
    this.setState({email})
  }
  setPassword(password){
    this.setState({password})
  }
  async checkUser(){
    try {
      const data={
        "User": this.state.email.email,
        "pwd": this.state.password.password
      }
      const url= 'http://45.236.129.73:8888/UserLogin/'
      const response = await axios.post(url, data)
      console.log(response.status)
      if(response.status==200){
        this.props.navigation.navigate("Inicio")
      }
      else{
        alert("Usuario o contraseña incorrectos")
      }
    } catch (error) {
      console.error(error);
    }
  }

  render(){
    return(
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <LinearGradient colors={["#EA0451", "#FF682F"]} style={styles.gradient}>
          <LOGO style={styles.logo} />

          <Text style={styles.text}>El dinero</Text>

          <Text style={styles.text1}>
            de <Text style={{ fontWeight: "bold" }}>tus sueños,</Text>
          </Text>

          <Text style={styles.text1}>
            al <Text style={{ fontWeight: "bold" }}>precio justo.</Text>
          </Text>
        </LinearGradient>

        <Text style={styles.text2}>
          Bienvenidos a{" "}
          <Text style={{ color: "#EA0451", fontWeight: "bold" }}>
            Triminance
          </Text>{" "}
          /{" "}
          <Text
            style={{ color: "#0439EA" }}
            onPress={() => this.props.navigation.navigate("Registro")}
          >
            Registrarme
          </Text>
        </Text>

        <View style={styles.con}>
          <View>
            <TextInput
              style={styles.inputext}
              name="user"
              type="text"
              placeholder="Login"
              required
              onChangeText={(email) => this.setEmail({ email })}
            />

            <TextInput
              style={styles.inputext}
              name="password"
              type="password"
              placeholder="Password"
              secureTextEntry={true}
              required
              onChangeText={(password) => this.setPassword({password })}
            />
          </View>
          <TouchableHighlight 
            style={styles.inputext2}
            onPress={() => this.checkUser()}
          >
            <Text style={styles.inputinside}>ACCEDER</Text>
          </TouchableHighlight>

          <Text style={styles.center}>He olvidado mi contraseña</Text>
         
          <Facebook style={styles.icon1} />
          <Instagram style={styles.icon2} />  
          <Twitter style={styles.icon3} /> 
          <Youtube style={styles.icon4} />
          
        </View>
      </View>
    </SafeAreaView>);
  }
}
const styles = StyleSheet.create({
  logo: {
    marginTop: 31,
    marginBottom: 31,
    marginLeft: 30
  },

  container: {
    flex: 1,
    backgroundColor: "white",
  },

  gradient: {
    width: 433,
    height: 300,
  },

  con: {
    marginLeft: 39,
    marginRight: 39,
  },

  text: {
    padding: 0,
    marginLeft: 39,
    fontSize: 35,
    fontFamily: "GraviolaSoftMedium",
    color: "white",
  },

  text1: {
    padding: 0,
    marginLeft: 39,
    fontSize: 35,
    fontFamily: "GraviolaSoftMedium",
    color: "white",
  },

  text2: {
    padding: 0,
    marginLeft: 39,
    marginTop: 60,
    marginBottom: 46,
    fontSize: 16,
    fontFamily: "GraviolaRegular",
  },

  inputext: {
    borderStyle: "solid",
    borderColor: "#D5D5D5",
    borderWidth: 1,
    borderRadius: 50,
    textAlign: "left",
    marginBottom: 30,
    padding: 6,
    paddingLeft: 40,
    fontSize: 16,
    height: 45,
    fontFamily: "RubikRegular",
  },

  inputext2: {
    borderStyle: "solid",
    backgroundColor: "#EA0451",
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  inputinside: {
    color: "#FFFFFF",
    fontFamily: "RubikBold",
  },

  center: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#0439EA",
    fontFamily: "RubikRegular",
  },

  icon1: {
    color: '#19454B',
    marginLeft: 70,
    marginTop: 40
  },

  icon2: {
    color: '#19454B',
    marginLeft: 120,
    marginTop: -21
  },

  icon3: {
    color: '#19454B',
    marginLeft: 168,
    marginTop: -21
  },

  icon4: {
    color: '#19454B',
    marginLeft: 218,
    marginTop: -21
  }



});

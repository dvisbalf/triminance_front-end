import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableHighlight } from "react-native";

const IngresosB = ({ navigation }) =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <Image source={require('../../assets/img/arriba.png')} style={style.Arriba} />
            </View>
            <View style={{flex:6}}>
                <View style={style.contenedor }>
                    <Text style={style.titulo}>Ingresos</Text>
                    <Text style={style.texto}>En esta sección podrás registrar y</Text>
                    <Text style={style.texto}>anexar las evidencias de tus capacidades</Text>
                    <Text style={style.texto}>financieras mediante sus ingresos por favor,</Text>
                    <Text style={style.texto}>provee la mayor información posible.</Text>
                </View>

                <TouchableHighlight
                    style={style.caja}
                    
                >
                    <Text style={style.boton} onPress={() => navigation.navigate("ingresos")}>EMPEZAR</Text>
                </TouchableHighlight>
            </View>

            <View style={{flex:1}}>
                <Image source={require('../../assets/img/abajo.png')} style={style.Abajo} />
            </View>
        </SafeAreaView>
    );
};
export default IngresosB;
const style = StyleSheet.create({
    Abajo:{
        width:'100%',
        height:110,

    },
    Arriba:{
        width:'100%',
        height:110,

    },
    contenedor:{
        marginTop:'40%',
        textAlign:"center",
        alignItems:"center",
        marginBottom:'14%',
    },
    caja:{
        marginLeft:'14%',
        marginRight:'14%',
        borderRadius:70,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#EA0451',
    },
    boton:{
        textAlign:"center",
        color:'white',
        fontSize:18,
        fontWeight:'bold',
    },
    titulo:{
        fontSize:40,
        marginBottom:'10%',
        fontWeight:'bold',
        color:'#EA0451',
    },
    texto:{
        fontSize:18
    },
})

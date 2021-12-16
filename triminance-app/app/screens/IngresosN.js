import React from "react";
import { View, TextInput, Text, StyleSheet, SafeAreaView,TouchableHighlight, ScrollView } from "react-native";
import {Picker} from '@react-native-picker/picker';

const IngresosN  = () =>{
    return(
        <SafeAreaView>
        <ScrollView>
            <View style={style.row} >
                <Text style={ style.ingresos} >Ingresos</Text>

                <TouchableHighlight style={style.contenedor}>
                    <Text style={style.derecha} >NUEVO INGRESO</Text>
                </TouchableHighlight>
            </View>
            <View  style={style.vacio}></View>
            
            <View style={style.margin}>

                <Text style={style.inicio}>Registrar ingreso</Text>
    
                <Text style={style.seccion}>1.Datos contrato</Text>

                <View style={style.cajas}>
                    <Picker
                        style={style.pais}
                        mode="dropdown"
                        dropdownIconColor="#D5D5D5"
                        dropdownIconRippleColor="#D5D5D5"                             
                    >
                        <Picker.Item style={{  }} label="tipo" value="" />
                        <Picker.Item label="Colombia" value="" />
                    </Picker>
                </View>
                
                <View style={style.cajas}>
                    <Picker
                        style={style.pais}
                        mode="dropdown"
                        dropdownIconColor="#D5D5D5"
                        dropdownIconRippleColor="#D5D5D5"           
                    >
                        <Picker.Item style={{  }} label="tipo" value="" />
                        <Picker.Item label="Colombia" value="" />
                    </Picker>
                </View>
      
                <View style={style.cajas}>
                    <Picker
                        style={style.pais}
                        mode="dropdown"
                        dropdownIconColor="#D5D5D5"
                        dropdownIconRippleColor="#D5D5D5"      
                    >
                        <Picker.Item style={{  }} label="tipo" value="" />
                        <Picker.Item label="Colombia" value="" />
                    </Picker>
                </View>
                
                <View style={style.cajasE}>
                    <TextInput 
                        name="empresa"
                        type="text"
                        placeholder="Empresa"
                        placeholderTextColor="#D5D5D5"
                        required
                    />
                </View>
                
                <Text style={style.seccion}>2.Datos ingreso</Text>
                
                <View style={style.cajasE}>
                    <TextInput 
                        name="Fidi"
                        type="date"
                        placeholder="Fecha inicio de ingresos"
                        placeholderTextColor="#D5D5D5"
                        required
                    />
                </View>

                <View style={style.cajasE}>
                    <TextInput 
                        name="ingresos"
                        type="number"
                        placeholder="Ingreso"
                        placeholderTextColor="#D5D5D5"
                        required
                    />
                </View>

                <View style={style.cajasE}>
                    <TextInput 
                        name="ingresosN"
                        type="number"
                        placeholder="IngresoNeto"
                        placeholderTextColor="#D5D5D5"
                        required
                    />
                </View>

                <View style={style.cajasE}>
                    <TextInput 
                        name="ingresoAnual"
                        type="text"
                        placeholder="Frecuencia de ingreso al año"
                        placeholderTextColor="#D5D5D5"
                        required
                    />
                </View>

                <Text style={style.seccion}>3.Anexar certificado</Text>
    
                <View style={style.central}>

                    <View  style={style.dentro1}>

                        <Text style={style.letras} >Galeria</Text>

                    </View>

                    <View style={style.dentro2}>

                        <Text style={style.letras} >Foto</Text>
                    
                    </View>

                </View>

                <TouchableHighlight style={style.contenedor1}>
                        <Text style={style.letras1}>GUARDAR</Text>
                </TouchableHighlight>

            </View>

        </ScrollView>
        </SafeAreaView>
    );


};
export default IngresosN;

const style =StyleSheet.create({
    ingresos:{
        fontWeight:'bold',
        fontSize:23,
        color:'#19454B',
        marginTop:'1%',
    },
    row:{
        justifyContent:"space-between",
        flexDirection:'row',
        marginTop:'12%',
        marginHorizontal:'5%',
        marginBottom:'4%',
    },
    vacio:{
        borderBottomWidth:2,
        borderBottomColor:'#00000033',
        shadowOpacity:30,
    },
    derecha:{
        fontWeight:'bold',
        fontSize:15,
        color:'white',
    },
    contenedor:{
        backgroundColor:'#EA0451',
        borderRadius:70,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
    },
    inicio:{
        fontWeight:'bold',
        color:'#19454B',
        fontSize:19,
    },
    margin:{
        marginTop:'6%',
        marginHorizontal:'5%',
    },
    seccion:{
        marginTop:'4%',
        color:'#FF682F',
        fontSize:20,
    },
    cajas:{
        borderColor:'#D5D5D5',
        borderWidth:1,
        borderRadius:70,
        paddingLeft:15,
        marginTop:20,
        paddingTop:10,

    },
    cajasE:{
        borderColor:'#D5D5D5',
        borderWidth:1,
        borderRadius:70,
        padding:0,
        marginTop:20,
        paddingLeft:10,
        paddingTop:7,
        paddingBottom:7,
    },
    pais: {
        color: "#D5D5D5",
        marginLeft: -8,
        marginTop: -15,
        marginBottom: -4,
        fontFamily: "RubikRegular",
        fontWeight: "bold",
    },
    central:{
        borderWidth:1,
        borderRadius:30,
        borderColor:'#FF682F',
        borderStyle:'dashed',
        flexDirection:'row',
        justifyContent:"space-between",
        backgroundColor:'#FFEFE9',
        marginTop:'6%'
    },
    dentro1:{
        padding:'10%',
        borderColor:'#FF682F',
        borderWidth:1,
        marginLeft:17,
        marginTop:20,
        marginBottom:20,
        borderRadius:30,
        paddingHorizontal:'17%',
        borderStyle:'dashed',
        backgroundColor:'white'
    },
    dentro2:{
        padding:'10%',
        borderColor:'#FF682F',
        borderWidth:1,
        marginRight:17,
        marginTop:20,
        marginBottom:20,
        borderRadius:30,
        paddingHorizontal:'17%',
        borderStyle:'dashed',
        backgroundColor:'white',
    },
    letras:{
        color:'#FF682F',
    },
    letras1:{
        color:'white',
        textAlign:"center"
    },
    contenedor1:{
        backgroundColor:'#EA0451',
        borderRadius:70,
        paddingTop:15,
        paddingBottom:15,
        marginTop:'7%',
        marginBottom:'7%',
    },
})
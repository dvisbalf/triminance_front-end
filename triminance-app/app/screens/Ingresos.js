import React from "react";
import { View, TextInput, Text, StyleSheet, SafeAreaView,TouchableHighlight } from "react-native";

const Ingresos  = () =>{
    return(
        <SafeAreaView>
            <View>
                <TouchableHighlight>
                    <Text>NUEVO INGRESO</Text>
                </TouchableHighlight>
            </View>
            <hr/>
            
            <Text>Registrar ingreso</Text>
    
    
            <Text>1.Datos contrato</Text>

            <Picker
              
            >
              <Picker.Item style={{  }} label="tipo" value="" />
              <Picker.Item label="Colombia" value="" />
            </Picker>
            
            <Picker
              
            >
                <Picker.Item style={{  }} label="tipo" value="" />
                <Picker.Item label="Colombia" value="" />
            </Picker>

            <Picker
              
            >
                <Picker.Item style={{  }} label="tipo" value="" />
                <Picker.Item label="Colombia" value="" />
            </Picker>

                
            <TextInput 
                name="empresa"
                type="text"
                placeholder="Empresa"
                placeholderTextColor="#D5D5D5"
                required
            />
    
            <Picker
              
            >
                <Picker.Item style={{  }} label="tipo" value="" />
                <Picker.Item label="Colombia" value="" />
            </Picker>

            <Picker
              
            >
                <Picker.Item style={{  }} label="tipo" value="" />
                <Picker.Item label="Colombia" value="" />
            </Picker>
            
            <Picker
              
            >
                <Picker.Item style={{  }} label="tipo" value="" />
                <Picker.Item label="Colombia" value="" />
            </Picker>
            
            
            <Text>2.Datos ingreso</Text>
    
            <TextInput 
                name="ingreso"
                type="number"
                placeholder="Ingreso"
                placeholderTextColor="#D5D5D5"
                required
            />
    
            <TextInput 
                name="ingresoN"
                type="number"
                placeholder="Ingreso neto"
                placeholderTextColor="#D5D5D5"
                required
            />
    
    
            <Text>3.Datos de contácto</Text>
            <TextInput 
                name="contacto"
                type="text"
                placeholder="Email"
                placeholderTextColor="#D5D5D5"
                required
            />

    
            <Text>4.Anexar certificado</Text>
            
            <View>
                <View></View>
                <View></View>
            </View>

            <TouchableHighlight>
                    <Text>GUARDAR</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                    <Text>EDITAR</Text>
            </TouchableHighlight>

        </SafeAreaView>

    );


};

export default Ingresos;
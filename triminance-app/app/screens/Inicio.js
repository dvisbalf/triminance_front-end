import React from "react";
import { View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from '../../assets/img/LOGO2.png';
import Mano from '../../assets/img/ref-icon2.png'

const Inicio = () => {
    return (
        <SafeAreaView>
        
        <LinearGradient colors={["#EA0451", "#FF682F"]}>
        
            <View>
                <Logo/>
                <Text>Hola,Usuario</Text>
            </View>    
            <hr/>

            <View>
                <Mano/>
                <Text>CUENTO CON</Text>
            </View>
        
        </LinearGradient>

        </SafeAreaView>
    );
};

export default Inicio;


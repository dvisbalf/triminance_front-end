import React from "react";
import { View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from '../../assets/img/LOGO2.png';

const Inicio = () => {
    return (
        <SafeAreaView>

        <LinearGradient colors={["#EA0451", "#FF682F"]}>
        <Logo/>    
        </LinearGradient>


        </SafeAreaView>
    );
};

export default Inicio;


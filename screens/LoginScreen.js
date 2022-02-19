import React from "react";
import {View, Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";
import useAuth from "../hooks/useAuth";


const LoginScreen = () => {

    const {user} = useAuth()

    return (
        <View>
            <Text>
               LoginScreen
            </Text>
        </View>
    )
}

export default LoginScreen;

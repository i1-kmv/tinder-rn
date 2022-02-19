import React from "react";
import {View, Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";


const LoginScreen = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text>
               LoginScreen
            </Text>
        </View>
    )
}

export default LoginScreen;

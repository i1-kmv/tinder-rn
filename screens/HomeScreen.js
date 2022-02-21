import React from "react";
import {View, Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";
import useAuth from "../hooks/useAuth";


export const HomeScreen = () => {

    const navigation = useNavigation()
    const {logout} = useAuth()

    return (
        <View>
            <Text>
                HomeScreen
            </Text>
            <Button
                title="go to chat"
                onPress={() => navigation.navigate("Chat")}
            />
            <Button
                title="logout"
                onPress={logout}
            />
        </View>
    )
}



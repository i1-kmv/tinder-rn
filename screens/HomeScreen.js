import React from "react";
import {View, Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";


export const HomeScreen = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text>
                HomeScreen
            </Text>
            <Button
                title="go to chat"
                onPress={() => navigation.navigate("Chat")}
            />
        </View>
    )
}



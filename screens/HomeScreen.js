import React from "react";
import {
    View,
    Text,
    Button,
    SafeAreaView,
    TouchableOpacity,
    Image
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";
import {AntDesign, Entypo, Ionicons} from "@expo/vector-icons";


export const HomeScreen = () => {

    const navigation = useNavigation()
    const {logout, user} = useAuth()

    return (
        <SafeAreaView style={tw('pt-7')}>
            <View  style={tw("flex-row items-center justify-between px-5")}>
               <TouchableOpacity onPress={logout}>
                    <Image
                        style={tw('h-10 w-10 rounded-full')}
                        source={{uri: user.photoURL}}
                    />
               </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={tw('h-14 w-14 rounded-full')}
                        source={require("../logo.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                    <Ionicons name='chatbubbles-sharp' size={30}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}



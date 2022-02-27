import React from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import tw from "tailwind-rn";


export const MatchScreen = () => {
    const navigation = useNavigation()
    const {params} = useRoute()

    const {loggedInProfile, userSwiped} = params


    return (
        <View style={[tw('h-full bg-red-500 pt-20'), {opacity: 0.89}]}>
            <View style={tw('justify-center px-10 pt-20')}>
                <Image
                    style={tw('h-20 w-full')}
                    source={{uri: 'https://links.papareact.com/mg9'} }
                />
            </View>

            <View style={tw('text-center text-white mt-5')}>
              <Text>
                  You and {userSwiped.displayName} have licked each other.
              </Text>
            </View>

            <View style={tw('flex-row justify-evenly mt-5')}>
                <Image
                    style={tw('h-32 w-32 rounded-full')}
                    source={{
                        uri: userSwiped.photoURL
                    }}
                />
            </View>

            <TouchableOpacity
                style={tw('bg-white m-5 px-10 py-8 rounded-full mt-20')}
                onPress={() => {
                    navigation.goBack()
                    navigation.navigate("Chat")
                }}
            >
                <Text>Send a massage</Text>
            </TouchableOpacity>
        </View>
    )
}

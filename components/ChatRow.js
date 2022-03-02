import React, {useEffect, useState} from "react";
import {TouchableOpacity, Image, View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import getMatchedUserInfo from "../lib/getMatchedUserinfo";
import tw from "tailwind-rn";


export const ChatRow = ({matchDetails}) => {

    const navigation = useNavigation()
    const user = useAuth()
    const [ matchedUserInfo,setMatchedUserInfo] = useState(null)

    useEffect(() => {
        setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid))
    },[matchDetails, user])

    return (
        <TouchableOpacity
            style={tw('flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg')}
            onPress={() => navigation.navigate('Message', {

            })}
        >
            <Image
                style={tw('rounded-full h-16 w-16 mr-4')}
                source={{uri:matchedUserInfo?.photoURL}}
            />

            <View>
                <Text style={tw('text-lg font-semibold')}>
                    {matchedUserInfo?.displayName}
                </Text>
                <Text>
                    Say hi!
                </Text>
            </View>
        </TouchableOpacity>
    )
}

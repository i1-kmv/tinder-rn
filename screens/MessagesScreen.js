import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import getMatchedUserInfo from "../lib/getMatchedUserinfo";
import Header from "react-native/Libraries/NewAppScreen/components/Header";
import useAuth from "../hooks/useAuth";
import {useRoute} from "@react-navigation/native";


export const MessagesScreen = () => {

    const {user} = useAuth()
    const {params} = useRoute()
    const {matchDetails} = params
    return (
        <SafeAreaView>
            <Header
                title={getMatchedUserInfo(matchDetails?.users, user.uid).displayName}
                callenable
            />
        </SafeAreaView>
    )
}

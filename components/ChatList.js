import React, {useEffect, useState} from "react";
import {View, Text, SafeAreaView, FlatList} from "react-native";
import tw from "tailwind-rn";
import {collection, onSnapshot, query, where} from "firebase/firestore";
import useAuth from "../hooks/useAuth";
import {db} from "../firebase";
import {ChatRow} from "./ChatRow";


export const ChatScreen = () => {
    const [matches, setMatches] = useState([])
    const {user} = useAuth()

    useEffect(() => {
        onSnapshot(query(collection(db, 'matches'), where('usersMatches',
            'array-contains', user.uid)), snapshot => setMatches(snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))))
    }, [user])

    return matches.length > 0 ? (
        <FlatList
            style={tw('h-full')}
            data={matches}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ChatRow matchDetails={item}/>}
        />
    ) : (
        <View>
            <Text>
                Chatlist...
            </Text>
        </View>)
}



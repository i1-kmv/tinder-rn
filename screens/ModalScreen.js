import React, {useState} from "react";
import {View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import tw from "tailwind-rn";
import useAuth from "../hooks/useAuth";


export const ModalScreen = () => {

    const {user} = useAuth()
    const [image, setImage] = useState(null)
    const [job, setJob] = useState(null)
    const [age, setAge] = useState(null)


    return (
        <View style={tw('flex-1 items-center pt-1')}>
            <Image
                style={tw('h-20 w-full')}
                resizeMode="contain"
                source={{uri: 'https://links.papareact.com/2pf'}}
            />

            <Text style={tw("text-xl text-gray-500 p-2 font-bold")}>
                Welcome {user.displayName}
            </Text>

            <Text style={tw("text-center text-red-400 p-4 font-bold")}>
               Step 1: The Profile Pic
            </Text>
            <TextInput
                value={image}
                onChangeText={text => setImage(text)}
                style={tw("text-center text-xl pb-2")}
                placeholder="Enter a Profile Pic URL"
            />

            <Text style={tw("text-center text-red-400 p-4 font-bold")}>
                Step 2: The Job
            </Text>
            <TextInput
                value={job}
                onChangeText={text => setJob(text)}
                style={tw("text-center text-xl pb-2")}
                placeholder="Enter a Job"
            />

            <Text style={tw("text-center text-red-400 p-4 font-bold")}>
                Step 3: The Age
            </Text>
            <TextInput
                value={age}
                onChangeText={text => setAge(text)}
                style={tw("text-center text-xl pb-2")}
                placeholder="Enter a Age"
            />

            <TouchableOpacity style={tw('w-64 p-3 rounded-xl absolute bottom-10 bg-red-400')}>
                <Text style={tw("text-center text-white text-xl")}>Update Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

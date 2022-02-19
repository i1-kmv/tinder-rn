import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {HomeScreen} from "./screens/HomeScreen";
import {ChatScreen} from "./screens/ChatScreen";
import LoginScreen from "./screens/Loginscreen";

const Stack = createNativeStackNavigator();


export const StackNavigator = () => {

    const user = true;

    return (
       <Stack.Navigator>
           {user ? (
           <>
               <Stack.Screen name="Home" component={HomeScreen}/>
               <Stack.Screen name="Chat" component={ChatScreen}/>

           </>
               ) : (
               <Stack.Screen name="Login" component={LoginScreen}/>
           )}
       </Stack.Navigator>
    )
}

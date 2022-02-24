import React, {useRef} from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    StyleSheet
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";
import {AntDesign, Entypo, Ionicons} from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const DUMMY_DATA = [
    {
        firstName: "Elly",
        lastName: "Beagle",
        occupation: "Home dog",
        photoURL: "https://petsi.net/images/dogbreed/28.jpg",
        age: "5",
        id: 1
    },
    {
        firstName: "Bob",
        lastName: "Beagle",
        occupation: "Home dog",
        photoURL: "https://storage-api.petstory.ru/resize/0x0x70/50/26/c3/5026c318e85c4b87aa4cea830d64d3f3.jpeg",
        age: "5",
        id: 2
    },
    {
        firstName: "Duck",
        lastName: "Beagle",
        occupation: "Home dog",
        photoURL: "http://petdiets.ru/image/data/bigl-statya.jpg",
        age: "5",
        id: 3
    },

]


export const HomeScreen = () => {

    const navigation = useNavigation()
    const {logout, user} = useAuth()
    const swipeRef = useRef(null)

    return (
        <SafeAreaView style={tw('pt-7 flex-1')}>
            <View style={tw("flex-row items-center justify-between px-5")}>
                <TouchableOpacity onPress={logout}>
                    <Image
                        style={tw('h-10 w-10 rounded-full')}
                        source={{uri: user.photoURL}}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
                    <Image
                        style={tw('h-14 w-14 rounded-full')}
                        source={require("../logo.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                    <Ionicons name='chatbubbles-sharp' size={30}/>
                </TouchableOpacity>
            </View>

            <View style={tw("flex-1 -mt-6")}>
                <Swiper
                    ref={swipeRef}
                    containerStyle={{backgroundColor: "transparent"}}
                    cards={DUMMY_DATA}
                    stackSize={5}
                    cardIndex={0}
                    animateCardOpacity
                    verticalSwipe={false}
                    onSwipedLeft={() => {
                        console.log('left')
                    }}
                    onSwipedRight={() => {
                        console.log('right')
                    }}
                    overlayLabels={{
                        left: {
                            title: "Не нравится",
                            style: {
                               label: {
                                   textAlign: "right",
                                   color: 'red'
                               }
                            }
                        },
                        right: {
                            title: "Нарвится",
                            style: {
                                label: {
                                    color: 'green'
                                }
                            }
                        }
                    }}
                    renderCard={(card) => (
                        <View
                            key={card.id}
                            style={tw("relative bg-white h-3/4 rounded-xl")}
                        >
                            <Image
                                style={tw("absolute top-0 h-full w-full rounded-xl")}
                                source={{uri: card.photoURL}}
                            />

                            <View style={[tw("bg-white w-full h-20 px-6 py-2 rounded-b-xl absolute bottom-0 flex-row justify-between items-center"), styles.cardShadow]}>
                                <View>
                                    <Text style={tw("text-xl font-bold")}>
                                        {card.firstName}
                                        {card.lastName}
                                    </Text>
                                    <Text>
                                        {card.occupation}
                                    </Text>
                                </View>
                                <Text style={tw("text-2xl font-bold")}>
                                    {card.age}
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>
            <View style={tw("flex flex-row justify-evenly ")}>
                <TouchableOpacity
                    onPress={() => swipeRef.current.swipeLeft()}
                    style={tw("items-center justify-center rounded-full w-16 h-16 bg-red-200")}
                >
                    <Entypo
                        name='cross'
                        size={24}
                        color='red'
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => swipeRef.current.swipeRight()}
                    style={tw("items-center justify-center rounded-full w-16 h-16 bg-green-200")}
                >
                    <AntDesign
                        name='heart'
                        size={24}
                        color='green'
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41
    }
})



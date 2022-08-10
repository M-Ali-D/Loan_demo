


import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Profiler, useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Button, TextInput, Dimensions,
} from "react-native"
import { Icon } from 'react-native-elements'


const Profile = ({ navigation }) => {
    const [phone, Setphone] = useState(null)
    const [name, Setname] = useState(null)
    useEffect(() => {
        AsyncStorage.getItem('Phone').then((e) => {
            if (e) {
                Setphone(e)
            }

            AsyncStorage.getItem('Name').then((e) => {
                if (e) {
                    Setname(e)
                }

            })
        })
    }, [])
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 25,
        },
        iconRow: {
            flex: 2,
            justifyContent: 'center',
        },
        smsIcon: {
            color: 'darkgray',
            fontSize: 30,
        },
        smsRow: {
            flex: 2,
            justifyContent: 'flex-start',
        },
        // telIcon: {
        //     color: mainColor,
        //     fontSize: 30,
        // },
        telNameColumn: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
        },
        telNameText: {
            color: 'gray',
            fontSize: 14,
            fontWeight: '200',
        },
        telNumberColumn: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 5,
        },
        telNumberText: {
            fontSize: 16,
        },
        telRow: {
            flex: 6,
            flexDirection: 'column',
            justifyContent: 'center',
        },
    })

    return (
        <View style={{ flex: 1, backgroundColor: '#f7f7ff', }}>
            <View style={{ top: 60, flex: 1, backgroundColor: '#f7f7ff', }}>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ height: 100, width: 100, borderRadius: 50 }}
                        source={{ uri: 'https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=1000x750&vertical=top' }}
                        resizeMode="cover"
                    />
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
                        Abhijeet Singh
                    </Text>
                    <Text style={{ fontSize: 18, color: "#000" }}>
                        Registration no :414
                    </Text>
                </View>
                <View style={{ left: 20, height: '10%', borderRadius: 20, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: "#ccc" }}>
                        {" Date of Birth"}
                    </Text>
                    <View style={{ flexDirection: 'row', top: 3 }}>
                        <Image
                            style={{ height: 25, width: 25, borderRadius: 50 }}
                            source={{ uri: "https://cdn.pixabay.com/photo/2019/01/01/14/55/calendar-3906791_1280.jpg" }}
                            resizeMode="contain"
                        />
                        <Text style={{ left: 5, fontSize: 16, fontWeight: "500", color: "#000" }}>
                            {" 04.08.1994"}
                        </Text>
                    </View>

                </View>
                <View style={{ alignItems: 'center', height: '35%', justifyContent: 'space-evenly' }}>
                    <View style={{ height: '20%', width: '90%', backgroundColor: '#fff', borderRadius: 9, elevation: 10 }}>
                        <View style={{ left: 20, height: '100%', justifyContent: 'center' }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{ height: 35, width: 35, borderRadius: 50 }}
                                    source={{ uri: "https://media.istockphoto.com/vectors/phone-icon-vector-id1143707670?k=20&m=1143707670&s=170667a&w=0&h=Zx20e3AsnAVFX154AS-oQaL_OZNuXOu5WBZAGXMFzRc=" }}
                                    resizeMode="contain"
                                />
                                <Text style={{ left: 5, fontSize: 16, fontWeight: "500", color: "#000" }}>
                                    {phone ? phone : "9000091910"}
                                </Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ height: '20%', width: '90%', backgroundColor: '#fff', borderRadius: 9, elevation: 10 }}>
                        <View style={{ left: 20, height: '100%', justifyContent: 'center' }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{ height: 35, width: 35, borderRadius: 50 }}
                                    source={{ uri: "data:image/png;base64,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" }}
                                    resizeMode="contain"
                                />
                                <Text style={{ left: 5, fontSize: 16, fontWeight: "500", color: "#000" }}>
                                    Shyftbank@gmail.com
                                </Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ height: '20%', width: '90%', backgroundColor: '#fff', borderRadius: 9, elevation: 10 }}>
                        <View style={{ left: 20, height: '100%', justifyContent: 'center' }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{ height: 35, width: 35, borderRadius: 50 }}
                                    source={{ uri: "https://www.pngitem.com/pimgs/m/63-630636_location-pin-transparent-transparent-background-location-icon-hd.png" }}
                                    resizeMode="contain"
                                />
                                <Text style={{ left: 5, fontSize: 16, fontWeight: "500", color: "#000" }}>
                                    Delhi,India
                                </Text>
                            </View>
                        </View>

                    </View>

                </View>

            </View>

        </View>
    )



}
export default Profile;

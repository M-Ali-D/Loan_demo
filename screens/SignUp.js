import React, { useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    // AsyncStorage
} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient'
import auth from '@react-native-firebase/auth';

import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const SignUp = ({ navigation }) => {

    const [showPassword, setShowPassword] = React.useState(false)
    const [phone, Setphone] = React.useState(false)
    const [code, setCode] = React.useState(false)
    const [confirm, setConfirm] = React.useState(null);
    const [name, setName] = React.useState(null);

    const [areas, setAreas] = React.useState([])
    const [otp, setotp] = React.useState(null)
    const [selectedArea, setSelectedArea] = React.useState(null)
    const [modalVisible, setModalVisible] = React.useState(false)


    useEffect(() => {
        AsyncStorage.getItem('Phone').then((e) => {
            if (e != null) {
                // Setphone(e)
                return navigation.navigate({ name: "Home", merge: true });
            }

        })
    }, [])

    React.useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => {
                let areaData = data.map(item => {
                    return {
                        code: item.alpha2Code,
                        name: item.name,
                        callingCode: `+${item.callingCodes[0]}`,
                        flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`
                    }
                })

                setAreas(areaData)

                if (areaData.length > 0) {
                    let defaultData = areaData.filter(a => a.code == "US")

                    if (defaultData.length > 0) {
                        setSelectedArea(defaultData[0])
                    }
                }
            })
    }, [])

    const sendOtp = async () => {
        setotp(true)
        const confirmation = await auth().signInWithPhoneNumber("+91" + phone);
        console.log("confirmation", "+91" + phone)
        setConfirm(confirmation);
    }
    const confirmCode = async () => {

        if (phone && code) {
            if (name) {
                await AsyncStorage.setItem('Name', name + "")
                await AsyncStorage.setItem('Phone', phone + "")
            } else {
                await AsyncStorage.setItem('Phone', phone + "")
            }
            try {
                await confirm.confirm(code);
                // console.log('code right');
                navigation.navigate("Home")
            } catch (error) {
                console.log('Invalid code.');
            }
        }
        else {
            alert("Please fill all data")
        }
    }

    function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    marginTop: SIZES.padding * 6,
                    paddingHorizontal: SIZES.padding * 2
                }}
            // onPress={() => console.log("Sign Up")}
            >

                <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4 }}>Sign Up</Text>
            </TouchableOpacity>
        )
    }

    function renderLogo() {
        return (
            <></>
        )
    }

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    marginHorizontal: SIZES.padding * 3,
                }}
            >
                {/* Full Name */}
                <View style={{ marginTop: SIZES.padding * 3 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Full Name</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}
                        placeholder="Enter Full Name"
                        onChange={(e) => {
                            // console.log(e.nativeEvent.text)
                            setName(e.nativeEvent.text)

                        }}
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                    />
                </View>

                {/* Phone Number */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Phone Number</Text>

                    <View style={{ flexDirection: 'row' }}>
                        {/* Country Code */}
                        <TouchableOpacity
                            style={{
                                width: 100,
                                height: 50,
                                marginHorizontal: 5,
                                borderBottomColor: COLORS.white,
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                ...FONTS.body2
                            }}
                        // onPress={() => setModalVisible(true)}
                        >
                            <View style={{ justifyContent: 'center' }}>
                                <Image
                                    source={icons.down}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        tintColor: COLORS.white
                                    }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{selectedArea?.callingCode}
                                    +91
                                </Text>
                            </View>

                            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{selectedArea?.callingCode}</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Phone Number */}
                        <TextInput
                            style={{
                                flex: 1,
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.white,
                                borderBottomWidth: 1,
                                height: 40,
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                            placeholder="Enter Phone Number"
                            keyboardType={"number-pad"}
                            placeholderTextColor={COLORS.white}
                            onChange={(e) => {
                                Setphone(e.nativeEvent.text)
                                if (e.nativeEvent.text.length == 0) {
                                    setotp(null)
                                }
                                console.log(e)
                            }}
                            selectionColor={COLORS.white}
                        />
                    </View>
                </View>

                {/* Password */}
                {otp && <>
                    <View style={{ marginTop: SIZES.padding * 2 }}>
                        <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Otp</Text>
                        <TextInput
                            style={{
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.white,
                                borderBottomWidth: 1,
                                height: 40,
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                            placeholder="Enter Otp"
                            keyboardType={"number-pad"}
                            onChangeText={(e) => {
                                setCode(e)
                            }}
                            placeholderTextColor={COLORS.white}
                            selectionColor={COLORS.white}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                right: 0,
                                bottom: 10,
                                height: 30,
                                width: 30
                            }}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Image
                                source={showPassword ? icons.disable_eye : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.white
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </>}
            </View>
        )
    }

    function renderButton() {
        return (
            <View style={{ margin: SIZES.padding * 3 }}>
                <TouchableOpacity
                    style={{
                        height: 60,
                        backgroundColor: COLORS.black,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        if (phone.length < 11) {
                            if (otp) {
                                confirmCode()
                            } else
                                sendOtp()
                        } else {
                            alert("Please fill all data")
                        }
                    }

                    }
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Continue</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderAreaCodesModal() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ padding: SIZES.padding, flexDirection: 'row' }}
                    onPress={() => {
                        setSelectedArea(item)
                        setModalVisible(false)
                    }}
                >
                    <Image
                        source={{ uri: item.flag }}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body4 }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={{
                                height: 400,
                                width: SIZES.width * 0.8,
                                backgroundColor: COLORS.lightGreen,
                                borderRadius: SIZES.radius
                            }}
                        >
                            <FlatList
                                data={areas}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.code}
                                showsVerticalScrollIndicator={false}
                                style={{
                                    padding: SIZES.padding * 2,
                                    marginBottom: SIZES.padding * 2
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
        >
            <LinearGradient
                colors={[COLORS.lime, COLORS.emerald]}
                style={{ flex: 1 }}
            >
                <ScrollView>
                    {renderHeader()}
                    {renderLogo()}
                    {renderForm()}
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
            {renderAreaCodesModal()}
        </KeyboardAvoidingView>
    )
}

export default SignUp;
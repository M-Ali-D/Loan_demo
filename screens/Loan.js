


import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Button, TextInput,
} from "react-native"
// import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import RadioGroup from 'react-native-radio-buttons-group';
import AsyncStorage from '@react-native-async-storage/async-storage';// import { useSafeArea } from "react-native-safe-area-context";
const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Driving License',
    value: 'Driving License'
}, {
    id: '2',
    label: 'State ID',
    value: 'State ID'
}]
// var fn = null
// var ln = null
// var Email = null
// var Dob = null
// var phone=null
// var sa = null
// var an = null
// var zip = null
var state = null
var dl = null
var id = null
const Loan = ({ navigation }) => {
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)
    // const [data, Setdata] = useState()
    const [fn, setfn] = useState("")
    const [ln, setln] = useState("")
    const [email, SetEmail] = useState("")
    const [phone, Setphone] = useState('')
    const [sa, Setsa] = useState('')
    const [stateid, Setstateid] = useState('')
    const [dob, Setdon] = useState('')
    const [zip, Setzip] = useState('')
    const [an, Setan] = useState('')
    const [state, Setstate] = useState('')
    const [dl, Setdl] = useState('')
    const [id, Setid] = useState('')

    const dataSave = () => {
        // console.log("calling", (fn && ln) && (email && phone) && (sa && dob) && (zip && an) && (state))
        if (fn.length > 1 && ln.length > 1 && email.length > 1 && phone.length > 1 && sa.length > 1 && dob.length > 1 && zip.length > 1 && an.length > 1 && state.length > 1) {
            if (dl.length > 1 || stateid.length > 1) {
                let SubmitData = {
                    PersonalDetails: {
                        FirstName: fn,
                        LastName: ln,
                        EmailAddress: email,
                        PhoneNumber: phone,
                        DateOfBirth: dob,
                    },
                    Address: {
                        StreetAddress: sa,
                        ApartmentNumber: an,
                        ZipCode: zip,
                        State: state,
                    },
                    Identification: {
                        ResidentialProof: dl.length > 1 ? 'Driver Licence' : 'State ID',
                        ResidentialProofID: "1",
                        IdNumber: dl.length > 1 ? dl : '',
                        IdState: dl.length > 1 ? '' : stateid,
                    }
                }
                // let i=[]
                AsyncStorage.getItem("userData").then((e) => {
                    // console.log("eeeeee", e)
                    let arr = JSON.parse(e)
                    arr.push(SubmitData)
                    AsyncStorage.setItem("userData", JSON.stringify(arr))
                    // navigation.navigate({ name: "Home", merge: true });
                    AsyncStorage.getItem("userData").then((e) => {
                        console.log("eeeeee", e)
                    })
                    navigation.navigate({ name: "Home", merge: true });
                })

            } else {
                alert("Please fill all data")
            }
        } else {
            alert("Please fill all data")
        }

    }

    const featuresData = [
        {
            id: 1,
            // icon: icons.reload,
            // color: COLORS.purple,
            // backgroundColor: COLORS.lightpurple,
            description: "Top Up"
        },
        {
            id: 2,
            // icon: icons.send,
            // color: COLORS.yellow,
            // backgroundColor: COLORS.lightyellow,
            description: "Transfer"
        },
        {
            id: 3,
            // icon: icons.internet,
            // color: COLORS.primary,
            // backgroundColor: COLORS.lightGreen,
            description: "Internet"
        },
        {
            id: 4,
            // icon: icons.wallet,
            // color: COLORS.red,
            // backgroundColor: COLORS.lightRed,
            description: "Wallet"
        },
        {
            id: 5,
            // icon: icons.bill,
            // color: COLORS.yellow,
            // backgroundColor: COLORS.lightyellow,
            description: "Bill"
        },
        {
            id: 6,
            // icon: icons.game,
            // color: COLORS.primary,
            // backgroundColor: COLORS.lightGreen,
            description: "Games"
        },
        {
            id: 7,
            // icon: icons.phone,
            // color: COLORS.red,
            // backgroundColor: COLORS.lightRed,
            description: "Mobile Prepaid"
        },
        {
            id: 8,
            // icon: icons.more,
            // color: COLORS.purple,
            // backgroundColor: COLORS.lightpurple,
            description: "More"
        },
    ]
    const specialPromoData = [
        {
            id: 1,
            // img: images.promoBanner,
            title: "Bonus Cashback1",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 2,
            // img: images.promoBanner,
            title: "Bonus Cashback2",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 3,
            // img: images.promoBanner,
            title: "Bonus Cashback3",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 4,
            // img: images.promoBanner,
            title: "Bonus Cashback4",
            description: "Don't miss it. Grab it now!"
        },
    ]
    const [features, setFeatures] = React.useState(featuresData)
    const [specialPromos, setSpecialPromos] = React.useState(specialPromoData)
    return <>
        <View style={{ height: '93%', backgroundColor: "#fff" }}>

            <View style={{ top: "3%", }}>

                <ScrollView contentContainerStyle={{ alignItems: 'center', }}>

                    <View style={{ height: '88%', width: "90%", backgroundColor: '#fff', }}>
                        <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Customer Information</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', left: '2%' }}>Personal Details</Text>
                        <View style={{ width: "80%", flexDirection: "row", justifyContent: 'space-around', marginTop: 10, marginBottom: 10 }}>
                            <View style={{ backgroundColor: '#F5FAFA', borderColor: "grey", borderWidth: 1, width: '45%', height: '100%', borderRadius: 5, }}>
                                <TextInput
                                    placeholder={"  First Namee"}
                                    // onChangeText
                                    value={fn}
                                    onChangeText={value => setfn(value)}
                                    noBorder={true}
                                />
                            </View>
                            <View style={{ backgroundColor: '#F5FAFA', borderColor: "#A9A9B0", borderWidth: 1, width: '45%', borderRadius: 5, }}>
                                <TextInput
                                    placeholder="  Last Name"
                                    value={ln}
                                    onChangeText={(e) => {
                                        setln(e)
                                    }}
                                    noBorder={true}
                                />
                            </View>
                        </View>
                        <View style={{ width: "100%", height: "8%", alignItems: 'center', justifyContent: "center", marginTop: 10, marginBottom: 10 }}>
                            <View style={{ height: "100%", backgroundColor: '#F5FAFA', borderColor: "#A9A9B0", borderWidth: 1, width: "95%", borderRadius: 5 }}>
                                <TextInput
                                    placeholder="  Email"
                                    value={email}
                                    onChangeText={(e) => {
                                        SetEmail(e)
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ width: "100%", flexDirection: "row", justifyContent: 'space-around', marginTop: 10, marginBottom: 10 }}>
                            <View style={{ backgroundColor: '#F5FAFA', borderColor: "#A9A9B0", borderWidth: 1, width: '45%', borderRadius: 5 }}>
                                <TextInput
                                    placeholder="  Date of Birth"
                                    value={dob}
                                    keyboardType={"phone-pad"}
                                    onChangeText={(e) => {
                                        Setdon(e)
                                    }}
                                />
                            </View><View style={{ backgroundColor: '#F5FAFA', borderColor: "#A9A9B0", borderWidth: 1, width: '45%', borderRadius: 5 }}>
                                <TextInput
                                    placeholder="  Phone Number"
                                    value={phone}
                                    keyboardType={"phone-pad"}
                                    onChangeText={(e) => {
                                        Setphone(e)
                                    }}
                                />
                            </View>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', left: "3%", top: 5 }}>Address</Text>
                        <View style={{ width: "100%", height: "8%", alignItems: 'center', justifyContent: "center", marginBottom: 10, marginTop: 10 }}>
                            <View style={{ height: "100%", backgroundColor: '#F5FAFA', borderColor: "#A9A9B0", borderWidth: 1, width: "95%", borderRadius: 5 }}>
                                <TextInput
                                    placeholder="  Street Address"
                                    value={sa}
                                    onChangeText={(e) => {
                                        Setsa(e)
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ width: "100%", flexDirection: "row", justifyContent: 'space-around', marginTop: 10, marginBottom: 10 }}>
                            <View style={{ backgroundColor: '#F5FAFA', borderColor: "#A9A9B0", borderWidth: 1, width: '45%', borderRadius: 5 }}>
                                <TextInput
                                    placeholder="  Appartment No"
                                    value={an}
                                    keyboardType={"phone-pad"}
                                    onChangeText={(e) => {
                                        Setan(e)
                                    }}
                                />
                            </View><View style={{ backgroundColor: '#F5FAFA', borderColor: "#A9A9B0", borderWidth: 1, width: '45%', borderRadius: 5 }}>
                                <TextInput
                                    placeholder="  Zip Code"
                                    value={zip}
                                    keyboardType={"phone-pad"}
                                    onChangeText={(e) => {
                                        Setzip(e)
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ width: "100%", height: "8%", alignItems: 'center', justifyContent: "center", marginTop: 10, marginBottom: 10 }}>
                            <View style={{ height: "100%", backgroundColor: '#F5FAFA', borderColor: "#A9A9B0", borderWidth: 1, width: "95%", borderRadius: 5 }}>
                                <TextInput
                                    placeholder="  State"
                                    value={state}
                                    onChangeText={(e) => {
                                        Setstate(e)
                                    }}
                                />
                            </View>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', left: "3%", }}>Identification</Text>
                        <View style={{ width: "100%", flexDirection: "row", justifyContent: 'space-around', top: "2%" }}>
                            <RadioGroup
                                radioButtons={radioButtons}
                                layout='row'
                            // onPress={onPressRadioButton}
                            />
                        </View>
                        <View style={{ width: "100%", flexDirection: "row", justifyContent: 'space-around', top: "3%", marginTop: 10, marginBottom: 30 }}>
                            <View style={{ backgroundColor: '#F5FAFA', borderColor: "#A9A9B0", borderWidth: 1, width: '45%', borderRadius: 5 }}>
                                <TextInput
                                    placeholder="  ID Number"
                                    value={dl}
                                    keyboardType={"phone-pad"}
                                    onChangeText={(e) => {
                                        Setdl(e)
                                    }}
                                />
                            </View><View style={{ backgroundColor: '#F5FAFA', borderColor: "#A9A9B0", borderWidth: 1, width: '45%', borderRadius: 5 }}>
                                <TextInput
                                    placeholder="  ID State"
                                    value={stateid}
                                    onChangeText={(e) => {
                                        Setstateid(e)
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{ top: 7, height: 50, width: "40%", backgroundColor: 'green', justifyContent: "center", alignItems: 'center', borderRadius: 25 }}
                        onPress={() => {
                            dataSave()

                        }}
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: "#fff" }}>Continue</Text>
                    </TouchableOpacity>
                    <Text></Text>
                </ScrollView>
            </View>
        </View>
    </>
}
export default Loan;

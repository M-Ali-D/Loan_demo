import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native"
import { RNCamera } from 'react-native-camera'
import { TextInput } from "react-native-paper";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";

const Scan = ({ navigation }) => {
    return (<>
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', top: 0, alignItems: 'center', flexDirection: "row" }}>
                <View style={{ height: 50, width: 50, borderRadius: 60,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',elevation:10 }}>
                    <Image
                        style={{ height: 35, width: 35, borderRadius: 50 }}
                        source={{ uri: "https://www.pngitem.com/pimgs/m/63-630636_location-pin-transparent-transparent-background-location-icon-hd.png" }}
                        resizeMode="contain"
                    />
                </View>
                <TextInput
                    style={{ width: '80%', height: '25%',left:7 }}
                    placeholder={"Search by name"}
                >

                </TextInput>
            </View>

        </View>
    </>)

}

export default Scan;
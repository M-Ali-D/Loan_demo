import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from "react-native"
import { ProgressBar, MD3Colors } from "react-native-paper";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"



const Home = ({ navigation }) => {
    const [data1, Setdata] = useState([])
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            AsyncStorage.getItem("userData").then((e) => {
                console.log("eeeeeeeee",e)
                if (e.length>0) {
                    Setdata(JSON.parse(e))
                }
            })
        });
        return unsubscribe;
    }, [navigation]);


    useEffect(() => {
        AsyncStorage.getItem("userData").then((e) => {
            if (e) {
                Setdata(e)
            } else {
                AsyncStorage.setItem("userData", JSON.stringify([]))
            }
        })
        console.log("dataaaaaaaa", data1.length )
    }, [])

    const featuresData = [
        {
            id: 1,
            icon: icons.reload,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "Top Up"
        },
        {
            id: 2,
            icon: icons.send,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Transfer"
        },
        {
            id: 3,
            icon: icons.internet,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Internet"
        },
        {
            id: 4,
            icon: icons.wallet,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Wallet"
        },
        {
            id: 5,
            icon: icons.bill,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Bill"
        },
        {
            id: 6,
            icon: icons.game,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Games"
        },
        {
            id: 7,
            icon: icons.phone,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Mobile Prepaid"
        },
        {
            id: 8,
            icon: icons.more,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "More"
        },
    ]

    const specialPromoData = [
        {
            id: 1,
            img: images.promoBanner,
            title: "Bonus Cashback1",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 2,
            img: images.promoBanner,
            title: "Bonus Cashback2",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 3,
            img: images.promoBanner,
            title: "Bonus Cashback3",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 4,
            img: images.promoBanner,
            title: "Bonus Cashback4",
            description: "Don't miss it. Grab it now!"
        },
    ]

    const [features, setFeatures] = React.useState(featuresData)
    const [specialPromos, setSpecialPromos] = React.useState(specialPromoData)

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.h1 }}>Get Loan</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.gray }}>By Shyft Bank</Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.lightGray
                        }}
                    >
                        <Image
                            source={icons.bell}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.secondary
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                height: 10,
                                width: 10,
                                backgroundColor: COLORS.red,
                                borderRadius: 5
                            }}
                        >
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    function renderBanner() {
        return (
            <View
                style={{
                    height: 180,
                    width: Dimensions.get('window').width - 38,
                    borderRadius: 20,
                }}
            >
                <ScrollView
                    horizontal
                    style={{ height: 120, width: "100%", }}>
                    {
                        data1.length > 0 && data1.map((item) => {
                            console.log("item", item)

                            return <>
                                <Text>{item}
                                </Text>
                            </>
                        })
                    }
                    <View style={{ height: "100%", width: Dimensions.get('window').width, borderRadius: 10, backgroundColor: COLORS.primary, }}>
                        <View style={{ left: 7, top: 5 }}>
                            <Text style={{ fontSize: 16, color: "#ccc" }}>
                                Maximum Amount
                            </Text>
                            <Text style={{ fontSize: 25, fontWeight: '700', color: "#fff" }}>
                                $50000
                            </Text>
                            <View style={{ top: 10, width: "89%", justifyContent: 'center', }}>
                                <ProgressBar progress={0.1} color={"#fff"} />
                            </View>

                            <View style={{ top: 10, left: "4%", width: '85%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, color: "#fff" }}>
                                    Apply
                                </Text>
                                <Text style={{ fontSize: 18, color: "#ccc" }}>
                                    Review
                                </Text><Text style={{ fontSize: 18, color: "#ccc" }}>
                                    Approval
                                </Text>
                            </View>
                            <TouchableOpacity style={{ top: 25, width: '95%', height: 45, flexDirection: 'row', justifyContent: 'space-between', justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => {
                                    navigation.navigate({ name: "Loan", merge: true });
                                }}
                            >
                                <View style={{ height: 40, width: '40%', borderColor: "#fff", borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#fff" }}>
                                        Apply Now
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                    {/* <Image
                            source={images.banner}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 20
                            }}
                        /> */}
                </ScrollView>
            </View>
        )
    }

    function renderFeatures() {

        const Header = () => (
            <View style={{ marginBottom: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h3 }}>Features</Text>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center' }}
                onPress={() => console.log(item.description)}
            >
                <View
                    style={{
                        height: 50,
                        width: 50,
                        marginBottom: 5,
                        borderRadius: 20,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: item.color
                        }}
                    />
                </View>
                <Text style={{ textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4 }}>{item.description}</Text>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={Header}
                data={features}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: SIZES.padding * 2 }}
            />
        )
    }

    function renderPromos() {

        const HeaderComponent = () => (
            <View>
                {renderHeader()}
                {renderBanner()}
                {renderFeatures()}
                {renderPromoHeader()}
            </View>
        )

        const renderPromoHeader = () => (
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: SIZES.padding
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.h3 }}>Special Promos</Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log("View All")}
                >
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View All</Text>
                </TouchableOpacity>
            </View>

        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    marginVertical: SIZES.base,
                    width: SIZES.width / 2.5
                }}
                onPress={() => console.log(item.title)}
            >
                <View
                    style={{
                        height: 80,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: COLORS.primary
                    }}
                >
                    <Image
                        source={images.promoBanner}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20
                        }}
                    />
                </View>

                <View
                    style={{
                        padding: SIZES.padding,
                        backgroundColor: COLORS.lightGray,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                >
                    <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body4 }}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={HeaderComponent}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={specialPromos}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <View style={{ marginBottom: 80 }}>
                    </View>
                }
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderPromos()}
        </SafeAreaView>
    )
}

export default Home;
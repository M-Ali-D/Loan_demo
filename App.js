/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { SignUp } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Tabs from "./navigation/tabs";
import Loan from './screens/Loan';
import Profile from './screens/Profile';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="SignUp" component={SignUp} />

                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="Profile" component={Profile} />

                <Stack.Screen name="Loan" component={Loan} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;

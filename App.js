import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "./src/components/Main/Home/home";
import Download from "./src/components/Main/Download/download";
import Browse from "./src/components/Main/Browse/browse";
import Search from "./src/components/Main/Search/search";
import Login from "./src/components/Authen/Login/login";
import Register from "./src/components/Authen/Register/register";
import ForgotPassword from "./src/components/Authen/ForgotPassword/forgot-password";
import Profile from "./src/components/Profile/profile";
import Setting from "./src/components/RelativeComponent/Settings/settings";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content"/>
            <NavigationContainer style={styles.main}>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused ? 'ios-home' : 'md-home';
                            }
                            else if (route.name === 'Download') {
                                iconName = focused ? 'md-cloud-download' : 'md-download';
                            }
                            else if (route.name === 'Browse') {
                                iconName = focused ? 'ios-list-box' : 'ios-list';
                            }
                            else if (route.name === 'Search') {
                                iconName = focused ? 'ios-search' : 'md-search';
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#3399FF',
                        activeBackgroundColor: 'transact',
                        inactiveTintColor: 'white',
                        inactiveBackgroundColor: 'black',
                    }}
                >
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Download" component={Download} />
                    <Tab.Screen name="Browse" component={Browse} />
                    <Tab.Screen name="Search" component={Search} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
};

const styles = StyleSheet.create({
    main: {
        flex:1,
        justifyContent: 'center',
    }
});


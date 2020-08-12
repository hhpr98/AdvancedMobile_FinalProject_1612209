import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
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
import CourseDetail from "./src/components/Courses/CourseDetail/course-detail";
import Subscription from "./src/components/RelativeComponent/Subcription/subcription";
import Contact from "./src/components/RelativeComponent/Contact/contact";
import Favorite from "./src/components/Main/Favorite/favorite";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const TabBar = () => {
    return (
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
                    else if (route.name == 'Favorite') {
                        iconName = focused ? 'ios-heart' : 'md-heart';
                    }
                    else if (route.name === 'Browse') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }
                    else if (route.name === 'Search') {
                        iconName = focused ? 'ios-search' : 'md-search';
                    }
                    else if (route.name === 'Setting') {
                        iconName = focused ? 'md-settings' : 'ios-settings';
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
            <Tab.Screen name="Home" component={Home} option={{title: "Home"}}/>
            <Tab.Screen name="Favorite" component={Favorite} option={{title: "Favorite"}}/>
            <Tab.Screen name="Browse" component={Browse} option={{title: "Browse"}}/>
            <Tab.Screen name="Search" component={Search} option={{title: "Search"}}/>
            <Tab.Screen name="Setting" component={Setting} option={{title: "Setting"}}/>
        </Tab.Navigator>
    )
};

const HomeScreenNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#282828',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="CourseDetail" component={CourseDetail} />
            <Stack.Screen name="Subscription" component={Subscription} />
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    )
}

export default function App() {

    return (
        <>
            <StatusBar barStyle="light-content" />
            <NavigationContainer style={styles.main}>
                <TabBar/>
            </NavigationContainer>
        </>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
    }
});


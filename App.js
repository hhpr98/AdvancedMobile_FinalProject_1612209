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
import SplashScreen from "./src/components/RelativeComponent/Splash/splash";
import ScreenKey from "./src/libs/ScreenKey";
import { themes } from "./src/libs/themes";

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const BrowseStack = createStackNavigator();
const SearchStack = createStackNavigator();
const SettingStack = createStackNavigator();

const HomeStackNavigation = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#282828',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            initialRouteName="Home"
        >
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="CourseDetail" component={CourseDetail} />
        </HomeStack.Navigator>
    )
}

const FavoriteStackNavigation = () => {
    return (
        <FavoriteStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#282828',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            initialRouteName="Favorite"
        >
            <FavoriteStack.Screen name="Favorite" component={Favorite} />
        </FavoriteStack.Navigator>
    )
}

const BrowseStackNavigation = () => {
    return (
        <BrowseStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#282828',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            initialRouteName="Browse"
        >
            <BrowseStack.Screen name="Browse" component={Browse} />
        </BrowseStack.Navigator>
    )
}

const SearchStackNavigation = () => {
    return (
        <SearchStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#282828',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            initialRouteName="Search"
        >
            <SearchStack.Screen name="Search" component={Search} />
        </SearchStack.Navigator>
    )
}

const SettingStackNavigation = () => {
    return (
        <SettingStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#282828',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            initialRouteName="Setting"
        >
            <SettingStack.Screen name="Setting" component={Setting} />
            <SettingStack.Screen name="Profile" component={Profile} />
            <SettingStack.Screen name="Subscription" component={Subscription} />
            <SettingStack.Screen name="Contact" component={Contact} />
        </SettingStack.Navigator>
    )
}

const TabBar = (props) => {
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
            <Tab.Screen name="Home" component={HomeStackNavigation} option={{ title: "Home" }} />
            <Tab.Screen name="Favorite" component={FavoriteStackNavigation} option={{ title: "Favorite" }} />
            <Tab.Screen name="Browse" component={BrowseStackNavigation} option={{ title: "Browse" }} />
            <Tab.Screen name="Search" component={SearchStackNavigation} option={{ title: "Search" }} />
            <Tab.Screen name="Setting" component={SettingStackNavigation} option={{ title: "Setting" }} />
        </Tab.Navigator>
    )
};

const MainStackNavigation = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#282828',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="SplashScreen"
        >
            <MainStack.Screen name="SplashScreen" component={SplashScreen} />
            <MainStack.Screen name="Login" component={Login} />
            <MainStack.Screen name="ForgotPassword" component={ForgotPassword} />
            <MainStack.Screen name="Register" component={Register} />
            <MainStack.Screen name="TabBar" component={TabBar} />
        </MainStack.Navigator>
    )
}

export const ThemeContext = React.createContext();

export default function App(props) {

    const [theme, setTheme] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <StatusBar barStyle="light-content" />
            <NavigationContainer style={styles.main}>
                <MainStackNavigation />
            </NavigationContainer>
        </ThemeContext.Provider>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
    }
});


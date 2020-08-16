import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Button, TouchableOpacity, Text, ImageBackground } from 'react-native';
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
import { languages } from "./src/libs/languages";
import { DataProvider } from "./src/Provider/DataProvider";
import { PlayingVideoYoutube, PlayingVideoGoogleStorage } from "./src/components/RelativeComponent/PlayingVideo/playing-lesson";
import ActivateAccount from "./src/components/Authen/Activate/activate-account";

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const BrowseStack = createStackNavigator();
const SearchStack = createStackNavigator();
const SettingStack = createStackNavigator();

export const ThemeContext = React.createContext();

export default function App(props) {

    const [theme, setTheme] = useState(themes.dark);
    const [language, setLanguage] = useState(languages.en);

    const HomeStackNavigation = () => {
        return (
            <HomeStack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#3399FF',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                initialRouteName="Home"
            >
                <HomeStack.Screen name="Home" component={Home}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <ImageBackground source={{ uri: "https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Downloads-icon.png" }} style={{ width: 80, height: 30, resizeMode: "stretch" }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Download")}>
                                    <Text style={{ color: "white" }}></Text>
                                </TouchableOpacity>
                            </ImageBackground>

                        ),
                    })} />
                <HomeStack.Screen name="CourseDetail" component={CourseDetail} options={{ headerShown: false, }} />
                <HomeStack.Screen name="PlayingVideoYoutube" component={PlayingVideoYoutube} options={{ headerShown: false, }} />
                <HomeStack.Screen name="PlayingVideoGoogleStorage" component={PlayingVideoGoogleStorage} options={{ headerShown: false, }} />
                <HomeStack.Screen name="Download" component={Download} options={{ headerShown: false, }} />
            </HomeStack.Navigator>
        )
    }

    const FavoriteStackNavigation = () => {
        return (
            <FavoriteStack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#3399FF',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                initialRouteName="Favorite"
            >
                <FavoriteStack.Screen name="Favorite" component={Favorite} />
                <FavoriteStack.Screen name="CourseDetail" component={CourseDetail} options={{ headerShown: false, }} />
            </FavoriteStack.Navigator>
        )
    }

    const BrowseStackNavigation = () => {
        return (
            <BrowseStack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#3399FF',
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
                        backgroundColor: '#3399FF',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                initialRouteName="Search"
            >
                <SearchStack.Screen name="Search" component={Search} />
                <SearchStack.Screen name="CourseDetail" component={CourseDetail} options={{ headerShown: false, }} />
                <SearchStack.Screen name="PlayingVideoYoutube" component={PlayingVideoYoutube} options={{ headerShown: false, }} />
                <SearchStack.Screen name="PlayingVideoGoogleStorage" component={PlayingVideoGoogleStorage} options={{ headerShown: false, }} />

            </SearchStack.Navigator>
        )
    }

    const SettingStackNavigation = () => {
        return (
            <SettingStack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#3399FF',
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
                    tabBarLabel: ({ focused }) => {
                        switch (route.name) {
                            case 'Home':
                                return focused ? (
                                    <Text style={{ color: "#3399FF" }}>{language.homescreen.tab1}</Text>
                                ) : (
                                        <Text style={{ color: "#3399FF" }}>{language.homescreen.tab1}</Text>
                                    );
                                break;
                            case 'Download':
                                return focused ? (
                                    <Text style={{ color: "#3399FF" }}>{language.homescreen.tab2}</Text>
                                ) : (
                                        <Text style={{ color: "#3399FF" }}>{language.homescreen.tab2}</Text>
                                    );
                                break;
                            case 'Favorite':
                                return focused ? (
                                    <Text style={{ color: "#3399FF" }}>{language.homescreen.tab3}</Text>
                                ) : (
                                        <Text style={{ color: "#3399FF" }}>{language.homescreen.tab3}</Text>
                                    );
                                break;
                            case 'Browse':
                                return focused ? (
                                    <Text style={{ color: "#3399FF" }}>{language.homescreen.tab4}</Text>
                                ) : (
                                        <Text style={{ color: "#3399FF" }}>{language.homescreen.tab4}</Text>
                                    );
                                break;
                            case 'Search':
                                return focused ? (
                                    <Text style={{ color: "#3399FF" }}>{language.homescreen.tab5}</Text>
                                ) : (
                                        <Text style={{ color: "#3399FF" }}>{language.homescreen.tab5}</Text>
                                    );
                                break;
                            case 'Setting':
                                return focused ? (
                                    <Text style={{ color: "#3399FF" }}>{language.homescreen.tab6}</Text>
                                ) : (
                                        <Text style={{ color: "#3399FF" }}>{language.homescreen.tab6}</Text>
                                    );
                                break;

                            default:
                                return null;
                                break;
                        }
                    },
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
                    // inactiveTintColor: 'white',
                    inactiveTintColor: theme.foreground,
                    // inactiveBackgroundColor: 'black',
                    inactiveBackgroundColor: theme.background,
                }}
            >
                <Tab.Screen name="Home" component={HomeStackNavigation} option={{ title: "Home" }} />
                <Tab.Screen name="Favorite" component={FavoriteStackNavigation} option={{ title: "Favorite" }} />
                <Tab.Screen name="Browse" component={BrowseStackNavigation} option={{ title: "Browse" }} />
                <Tab.Screen name="Search" component={SearchStackNavigation} option={{ title: "Search" }} />
                <Tab.Screen name="Setting" component={SettingStackNavigation} option={{ title: "Setting" }} />
            </Tab.Navigator >
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
                <MainStack.Screen name="ActivateAccount" component={ActivateAccount} />
                <MainStack.Screen name="TabBar" component={TabBar} />
            </MainStack.Navigator>
        )
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage }}>
            <StatusBar barStyle="light-content" />
            <DataProvider>
                <NavigationContainer style={styles.main}>
                    <MainStackNavigation />
                </NavigationContainer>
            </DataProvider>
        </ThemeContext.Provider>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
    }
});


import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { ThemeContext } from "../../../../App";
import RNPickerSelect from 'react-native-picker-select';
import { themes } from "../../../libs/themes";

const Setting = (props) => {

    const [wifiStreamToggle, setWifiStreamToggle] = useState(true);
    const [downloadStreamToggle, setDownloadStreamToggle] = useState(true);

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, setTheme }) => {
                    return (
                        <ScrollView style={{ ...styles.home, backgroundColor: theme.background }}>
                            <TouchableOpacity style={styles.head} onPress={() => props.navigation.navigate('Profile')}>
                                <Image
                                    source={require('../../../../assets/ic_people_author.png')}
                                    style={{ ...styles.image, backgroundColor: theme.foreground }}
                                />
                                <Text style={{ ...styles.textHead, color: theme.foreground }}>Nguyễn Hữu Hòa</Text>
                            </TouchableOpacity>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>Account</Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Subscription')}>
                                <Text style={{ ...styles.textBig, color: theme.foreground }}>Subcription</Text>
                                <Text style={{ ...styles.textLittle, color: theme.foreground }}>My youtube channel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Contact')}>
                                <Text style={{ ...styles.textBig, color: theme.foreground }}>Contact</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    if (theme === themes.dark) {
                                        setTheme(themes.light);
                                    }
                                    else {
                                        setTheme(themes.dark);
                                    }
                                }}
                            >
                                <Text style={{ ...styles.textBig, color: theme.foreground }}>Theme</Text>
                                <Text style={{ ...styles.textLittle, color: theme.foreground }}>Click to change theme</Text>
                            </TouchableOpacity>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>Comunicate Preferences</Text>
                            <View style={{ ...styles.line, borderColor: theme.background, borderBottomColor: theme.foreground }} />
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>Default caption language</Text>
                            <Text style={{ ...styles.textLittle, color: theme.foreground }}>English</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ ...styles.textBig, color: theme.foreground }}>Require Wi-Fi for streaming</Text>
                                <ToggleSwitch style={{ marginRight: 50, }}
                                    isOn={wifiStreamToggle}
                                    onColor="#3399FF"
                                    offColor="black"
                                    labelStyle={{ ...styles.textBig, color: theme.foreground }}
                                    size="small"
                                    onToggle={() => setWifiStreamToggle(!wifiStreamToggle)}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ ...styles.textBig, color: theme.foreground }}>Require Wi-Fi for downloading</Text>
                                <ToggleSwitch style={{ marginRight: 50, }}
                                    isOn={downloadStreamToggle}
                                    onColor="#3399FF"
                                    offColor="black"
                                    labelStyle={{ ...styles.textBig, color: theme.foreground }}
                                    size="small"
                                    onToggle={() => setDownloadStreamToggle(!downloadStreamToggle)}
                                />
                            </View>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>Recommended content push notifications</Text>
                            <Text style={{ ...styles.textLittle, color: theme.foreground }}>Receive notifications about recommended contents.</Text>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>Show quiz at the end of video</Text>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>Download location</Text>
                            <Text style={{ ...styles.textLittle, color: theme.foreground }}>Default location (30.5GB free of 64GB)</Text>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>Default caption language</Text>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>Caption</Text>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>Notifications</Text>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>Advanced Options</Text>
                            <View style={{ ...styles.line, borderColor: theme.background, borderBottomColor: theme.foreground }} />
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>App version</Text>
                            <Text style={{ ...styles.textLittle, color: theme.foreground }}>0.1.3</Text>
                            <View style={{ ...styles.line, borderColor: theme.background, borderBottomColor: theme.foreground }} />

                            <TouchableOpacity style={styles.buttonSignOut} onPress={() => props.navigation.navigate("Login")}>
                                <Text style={styles.textSignOut}>SIGN OUT</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    );
                }
            }
        </ThemeContext.Consumer>
    )
};

const styles = StyleSheet.create({
    home: {
        flexDirection: 'column',
        flex: 1,
        //backgroundColor: 'black'
    },
    head: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginBottom: 20,
    },
    textHead: {
        //color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 20,
    },
    textBig: {
        //color: 'white',
        fontSize: 16,
        alignSelf: 'flex-start',
        marginTop: 20,
        marginLeft: 30,
    },
    textLittle: {
        //color: 'white',
        fontSize: 12,
        alignSelf: 'flex-start',
        marginLeft: 30,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40,
        //backgroundColor: '#333333'
    },
    line: {
        color: 'white',
        //borderColor: 'black',
        //borderBottomColor: '#333333',
        borderWidth: 0.5,
        height: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    buttonSignOut: {
        backgroundColor: 'black',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: '#3399FF',
        margin: 20,
        borderWidth: 3,
    },
    textSignOut: {
        color: '#3399FF',
        fontSize: 17,
        textAlign: 'center',
    },
});

export default Setting;

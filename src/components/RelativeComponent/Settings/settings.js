import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { ThemeContext } from "../../../../App";
import RNPickerSelect from 'react-native-picker-select';
import { themes } from "../../../libs/themes";
import { languages } from "../../../libs/languages";
import storage from "../../../Storage/storage";

const Setting = (props) => {

    const [wifiStreamToggle, setWifiStreamToggle] = useState(true);
    const [downloadStreamToggle, setDownloadStreamToggle] = useState(true);
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        storage
            .load({ key: "jwt" })
            .then(ret => {
                setName(ret.userInfo.name);
                setAvatar(ret.userInfo.avatar);
            })
            .catch(err => console.log(err.name))
    }, [])

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, setTheme, language, setLanguage }) => {
                    return (
                        <ScrollView style={{ ...styles.home, backgroundColor: theme.background }}>
                            <TouchableOpacity style={styles.head} onPress={() => props.navigation.navigate('Profile')}>
                                <Image
                                    source={{ uri: avatar }}
                                    style={{ ...styles.image, backgroundColor: theme.foreground }}
                                />
                                <Text style={{ ...styles.textHead, color: theme.foreground }}>{name}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Subscription')}>
                                <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.set1}</Text>
                                <Text style={{ ...styles.textLittle, color: theme.foreground }}>{language.settingscreen.set11}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Contact')}>
                                <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.set2}</Text>
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
                                <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.set3}</Text>
                                <Text style={{ ...styles.textLittle, color: theme.foreground }}>{theme.texttheme}</Text>
                            </TouchableOpacity>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.set4}</Text>
                            <View style={{ ...styles.line, borderColor: theme.background, borderBottomColor: theme.foreground }} />
                            <TouchableOpacity
                                onPress={() => {
                                    if (language === languages.en) {
                                        setLanguage(languages.vi);
                                    }
                                    else {
                                        setLanguage(languages.en);
                                    }
                                }}
                            >
                                <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.set5}</Text>
                                <Text style={{ ...styles.textLittle, color: theme.foreground }}>{language.name}</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.set6}</Text>
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
                                <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.set7}</Text>
                                <ToggleSwitch style={{ marginRight: 50, }}
                                    isOn={downloadStreamToggle}
                                    onColor="#3399FF"
                                    offColor="black"
                                    labelStyle={{ ...styles.textBig, color: theme.foreground }}
                                    size="small"
                                    onToggle={() => setDownloadStreamToggle(!downloadStreamToggle)}
                                />
                            </View>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.set8}</Text>
                            <Text style={{ ...styles.textLittle, color: theme.foreground }}>{language.settingscreen.set81}</Text>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.set9}</Text>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.seta}</Text>
                            <Text style={{ ...styles.textLittle, color: theme.foreground }}>{language.settingscreen.setb}</Text>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.setc}</Text>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.setd}</Text>
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.sete}</Text>
                            <View style={{ ...styles.line, borderColor: theme.background, borderBottomColor: theme.foreground }} />
                            <Text style={{ ...styles.textBig, color: theme.foreground }}>{language.settingscreen.setf}</Text>
                            <Text style={{ ...styles.textLittle, color: theme.foreground }}>0.1.0</Text>
                            <View style={{ ...styles.line, borderColor: theme.background, borderBottomColor: theme.foreground }} />

                            <TouchableOpacity style={styles.buttonSignOut} onPress={() => props.navigation.navigate("Login")}>
                                <Text style={styles.textSignOut}>{language.settingscreen.setg}</Text>
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

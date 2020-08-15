import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ThemeContext } from "../../../App";
import storage from "../../Storage/storage";
import { ScrollView } from 'react-native-gesture-handler';

const Profile = () => {

    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("NaN");
    const [point, setPoint] = useState(0);
    const [token, setToken] = useState("");

    useEffect(() => {
        storage
            .load({ key: "jwt" })
            .then(ret => {
                setEmail(ret.userInfo.email);
                setAvatar(ret.userInfo.avatar);
                setName(ret.userInfo.name);
                setPhone(ret.userInfo.phone);
                setPoint(ret.userInfo.point);
                setToken(ret.token);
            })
            .catch(err => console.log(err.name))
    }, [])

    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => {
                    return (
                        <ScrollView style={{ ...styles.home, backgroundColor: theme.background }}>
                            <View style={styles.head}>
                                <Image source={{ uri: avatar }} style={{ ...styles.image, backgroundColor: theme.foreground }} />
                                <Text style={{ ...styles.textHead, color: theme.foreground }}>{name}</Text>
                            </View>
                            <Text style={{ ...styles.text1, color: theme.foreground }}>Basic information</Text>
                            <Text style={{ ...styles.text2, color: theme.foreground }}>EMAIL</Text>
                            <Text style={{ ...styles.text3, color: theme.foreground }}>{email}</Text>
                            <Text style={{ ...styles.text2, color: theme.foreground }}>PHONE NUMBER</Text>
                            <Text style={{ ...styles.text3, color: theme.foreground }}>{phone}</Text>
                            <Text style={{ ...styles.text2, color: theme.foreground }}>POINTS</Text>
                            <Text style={{ ...styles.text3, color: theme.foreground }}>{point}</Text>
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
        justifyContent: 'space-around',
        marginLeft: -10,
    },
    textHead: {
        //color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    text1: {
        //color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    text2: {
        //color: 'white',
        fontSize: 13,
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    text3: {
        //color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        //backgroundColor: '#333333'
    },

    // copy style from login screen

});

export default Profile;

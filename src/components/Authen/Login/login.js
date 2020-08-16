import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { ThemeContext } from "../../../../App";
import storage from "../../../Storage/storage";
import { getLogin } from "../action";
import { languages } from '../../../libs/languages';

const Login = (props) => {
    const [user, setUser] = useState('nguyenhuuhoa1998@gmail.com');
    const [password, setPassword] = useState('abcxyz123@');

    const signInClick = () => {
        // console.log(user + password);
        getLogin(user, password)
            .then(res => res.json())
            .then(res => {
                if (res.message === "OK") { //login success
                    // save on storage
                    storage
                        .save({
                            key: "jwt",
                            data: {
                                userInfo: res.userInfo,
                                token: res.token,
                            },
                            expires: 3600 * 24 * 30
                        });
                    // navigate
                    props.navigation.navigate('TabBar');
                } else {
                    alert("Wrong username or password!");
                }
            })
            .catch(err => console.log("GET LOGIN ERR", err))
            .finally()
    }

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, language }) => {
                    // console.log(theme);
                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                            <View style={styles.view}>

                                <View style={{ ...styles.viewInsert2, backgroundColor: theme.background }} />

                                <View style={{ ...styles.viewBorder, backgroundColor: theme.background, borderRadius: theme.boderRadiusLogin }}>
                                    <Text style={styles.text}>{language.loginscreen.usernametext}</Text>
                                    <TextInput
                                        style={{ ...styles.input, color: theme.foreground }}
                                        //placeholder="username"
                                        //defaultValue="nguyenhuuhoa1998@gmail.com"
                                        placeholderTextColor="#4B4541"
                                        onChangeText={user => setUser(user)}
                                    />
                                </View>

                                <View style={{ ...styles.viewInsert, backgroundColor: theme.background }} />

                                <View style={{ ...styles.viewBorder, backgroundColor: theme.background, borderRadius: theme.boderRadiusLogin }}>
                                    <Text style={styles.text}>{language.loginscreen.passwordtext}</Text>
                                    <TextInput
                                        style={{ ...styles.input, color: theme.foreground }}
                                        secureTextEntry={true}
                                        //placeholder="***"
                                        //defaultValue="abcxyz123@"
                                        placeholderTextColor="#4B4541"
                                        onChangeText={password => setPassword(password)}
                                    >
                                    </TextInput>
                                </View>

                                <View style={{ ...styles.viewInsert2, backgroundColor: theme.background }} />

                                <TouchableOpacity style={{ ...styles.buttonSignIn, borderRadius: theme.boderRadiusLogin }}
                                    onPress={() => signInClick()}
                                >
                                    <Text style={styles.textSignIn}>{language.loginscreen.buttonlogintext}</Text>
                                </TouchableOpacity>
                                <View style={{ ...styles.viewInsert, backgroundColor: theme.background }} />
                                <TouchableOpacity style={{ ...styles.buttonForgotAndSignUp, backgroundColor: theme.background, borderRadius: theme.boderRadiusLogin }}
                                    onPress={() => props.navigation.navigate('ForgotPassword')}
                                >
                                    <Text style={styles.textOrther}>{language.loginscreen.buttonforgottext}</Text>
                                </TouchableOpacity>
                                <View style={{ ...styles.viewInsert, backgroundColor: theme.background }} />
                                <TouchableOpacity style={{ ...styles.buttonSSO, backgroundColor: theme.background, borderRadius: theme.boderRadiusLogin }}>
                                    <Text style={styles.textOrther}>{language.loginscreen.buttongoogletext}</Text>
                                </TouchableOpacity>
                                <View style={{ ...styles.viewInsert, backgroundColor: theme.background }} />
                                <TouchableOpacity style={{ ...styles.buttonForgotAndSignUp, backgroundColor: theme.background, borderRadius: theme.boderRadiusLogin }}
                                    onPress={() => props.navigation.navigate('Register')}
                                >
                                    <Text style={styles.textOrther}>{language.loginscreen.buttonsignuptext}</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    );
                }
            }
        </ThemeContext.Consumer>
    );
};

const styles = StyleSheet.create({
    home: {
        flexDirection: 'column',
        flex: 1,
        //backgroundColor: 'black'
    },
    view: {
        backgroundColor: 'black',
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 5,
    },
    viewBorder: {
        // backgroundColor: 'black',
        //borderRadius: 5,
    },
    viewInsert: {
        //backgroundColor: 'black',
        height: 10,
    },
    viewInsert2: {
        //backgroundColor: 'black',
        height: 50,
    },
    text: {
        color: '#3399FF',
        marginLeft: 10,
    },
    textSignIn: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    },
    textOrther: {
        color: '#3399FF',
        fontSize: 14,
        textAlign: 'center',
    },
    input: {
        height: 30,
        margin: 10,
        //color: 'white',
        borderBottomColor: '#3399FF',
        borderBottomWidth: 2,
        fontSize: 21,
    },
    buttonSignIn: {
        backgroundColor: '#3399FF',
        height: 40,
        //borderRadius: 5,
        justifyContent: 'center',
    },
    buttonForgotAndSignUp: {
        //backgroundColor: 'black',
        height: 40,
        //borderRadius: 5,
        justifyContent: 'center',
    },
    buttonSSO: {
        //backgroundColor: 'black',
        height: 40,
        //borderRadius: 5,
        justifyContent: 'center',
        borderColor: '#3399FF',
        borderWidth: 3,
    },
});

export default Login;

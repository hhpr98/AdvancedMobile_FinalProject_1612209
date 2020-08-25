import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ThemeContext } from "../../../Provider/ThemeProvider";
import storage from "../../../Storage/storage";
import { getLogin } from "../action";

const Login = (props) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const signInClick = () => {

        if (user === "") {
            alert("Không được bỏ trống email");
            return;
        }

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
                    // remove data input type
                    setUser("");
                    setPassword("");
                    // navigate
                    props.navigation.navigate('TabBar');
                } else {
                    alert("Sai tên đăng nhập hoặc mật khẩu!");
                }
            })
            .catch(err => console.log("GET LOGIN ERR", err))
            .finally()
    }

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, language }) => {
                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                            <View style={styles.view}>

                                <View style={{ ...styles.viewInsert2, backgroundColor: theme.background }} />

                                <View style={{ ...styles.viewBorder, backgroundColor: theme.background, borderRadius: theme.boderRadiusLogin }}>
                                    <Text style={styles.text}>{language.loginscreen.usernametext}</Text>
                                    <TextInput
                                        style={{ ...styles.input, color: theme.foreground }}
                                        defaultValue={user}
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
                                        defaultValue={password}
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
                                <TouchableOpacity style={{ ...styles.buttonSSO, backgroundColor: theme.background, borderRadius: theme.boderRadiusLogin }}
                                    onPress={() => props.navigation.navigate('GoogleAuth')}
                                >
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

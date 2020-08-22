import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { forgotPasswordSend } from "../action";
import { ThemeContext } from "../../../Provider/ThemeProvider";

const ForgotPassword = (props) => {
    const [email, setEmail] = useState('');

    const OnSendEmailClick = () => {
        forgotPasswordSend(email)
            .then(res => res.json())
            .then(res => {
                if (res.message === "Email đã được gửi đi") {
                    props.navigation.navigate("ForgotPasswordVerify", { email: email });
                } else {
                    alert(res.message);
                }
            })
            .catch(err => console.log("SEND FORGOT PASSWORD API FAILLLL", err))
    }

    return (
        <ThemeContext.Consumer>
            {
                ({ language }) => {
                    return (
                        <View style={styles.home}>
                            <View style={styles.view}>

                                <Text style={styles.textHeader}>{language.forgotsendscreen.title}</Text>

                                <View style={styles.viewInsert2} />

                                <Text style={styles.textFooter}>{language.forgotsendscreen.subtitle}</Text>

                                <View style={styles.viewInsert2} />

                                <View style={styles.viewBorder}>
                                    <Text style={styles.text}>Email</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={email => setEmail(email)}
                                    />
                                </View>

                                <View style={styles.viewInsert2} />

                                <TouchableOpacity
                                    style={styles.buttonSignIn}
                                    onPress={() => OnSendEmailClick()}
                                >
                                    <Text style={styles.textSignIn}>{language.forgotsendscreen.sendbutton}</Text>
                                </TouchableOpacity>

                                <View style={styles.viewInsert} />

                                <TouchableOpacity
                                    style={styles.buttonCancel}
                                    onPress={() => props.navigation.navigate("Login")}
                                >
                                    <Text style={styles.textSignIn}>{language.forgotsendscreen.cancelbutton}</Text>
                                </TouchableOpacity>

                                <View style={styles.viewInsert2} />

                            </View>
                        </View>
                    )
                }
            }
        </ThemeContext.Consumer>
    );
};

const styles = StyleSheet.create({
    home: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'black'
    },
    view: {
        backgroundColor: 'black',
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 5,
    },
    viewBorder: {
        backgroundColor: '#222222',
        borderRadius: 5,
    },
    viewInsert: {
        backgroundColor: 'black',
        height: 10,
    },
    viewInsert2: {
        backgroundColor: 'black',
        height: 50,
    },
    text: {
        color: '#3399FF',
        marginLeft: 10,
    },
    textHeader: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
        alignSelf: 'center'
    },
    textFooter: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'flex-start',
        textAlign: 'center'
    },
    textSignIn: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    },
    input: {
        height: 30,
        margin: 10,
        color: 'white',
        borderBottomColor: '#3399FF',
        borderBottomWidth: 2,
        fontSize: 21,
    },
    buttonSignIn: {
        backgroundColor: '#3399FF',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonCancel: {
        backgroundColor: '#222222',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
    },


});

export default ForgotPassword;

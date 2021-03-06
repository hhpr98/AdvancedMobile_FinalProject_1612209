import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { sendActivateEmail, acctivateEmail } from "../action";
import { ThemeContext } from "../../../Provider/ThemeProvider";

const ActivateAccount = (props) => {

    const email = props.route.params.email;
    // console.log(email);

    const [jwt, setJwt] = useState("");

    const onActivate = () => {
        acctivateEmail(email, jwt)
            .then(res => res.json())
            .then(res => {
                if (res.message === "OK") {
                    alert("Kích hoạt tài khoản thành công!");
                    props.navigation.navigate("Login");
                } else {
                    alert(res.message);
                }
            })
            .catch(err => console.log("ACTIVATE API FAILLLLL", err));
    }

    const onCancelClick = () => {
        props.navigation.navigate("Login");
    }

    const onResendEmail = () => {
        sendActivateEmail(email)
            .then(res => res.json())
            .then(res => {
                if (res.message === "OK") {
                    alert("Thành công! Kiểm tra email của bạn!")
                } else {
                    alert(res.message);
                }
            })
            .catch(err => console.log("SEND EMAIL TIME ERRRR", err));
    }

    return (
        <ThemeContext.Consumer>
            {
                ({ language }) => {
                    return (
                        <View style={styles.home}>
                            <View style={styles.view}>

                                <Text style={styles.textHeader}>{language.activatescreen.title}</Text>

                                <View style={styles.viewInsert2} />

                                <Text style={styles.textFooter}>{language.activatescreen.subtitle}</Text>

                                <View style={styles.viewInsert2} />

                                <View style={styles.viewBorder}>
                                    <Text style={styles.text}>Jwt</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={jwt => setJwt(jwt)}
                                    />
                                </View>

                                <View style={styles.viewInsert2} />

                                <TouchableOpacity style={styles.buttonSignIn} onPress={() => onActivate()}>
                                    <Text style={styles.textSignIn}>{language.activatescreen.activatebutton}</Text>
                                </TouchableOpacity>

                                <View style={styles.viewInsert} />

                                <TouchableOpacity style={styles.buttonCancel} onPress={() => onCancelClick()}>
                                    <Text style={styles.textSignIn}>{language.activatescreen.cancelbutton}</Text>
                                </TouchableOpacity>

                                <View style={styles.viewInsert2} />

                                <View style={styles.viewBorder}>
                                    <Text style={styles.text}>Email</Text>
                                    <TextInput
                                        style={styles.input}
                                        editable={false}
                                        //onChangeText={email => setEmail(email)}
                                        defaultValue={email}
                                    />
                                </View>

                                <View style={styles.viewInsert2} />

                                <TouchableOpacity style={styles.buttonSignIn2} onPress={() => onResendEmail()}>
                                    <Text style={styles.textSignIn}>{language.activatescreen.resendbutton}</Text>
                                </TouchableOpacity>
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
        alignSelf: 'flex-start'
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
    buttonSignIn2: {
        backgroundColor: '#3399FF',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        width: 150,
        alignSelf: "center"
    },
    buttonCancel: {
        backgroundColor: '#222222',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
    },


});

export default ActivateAccount;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { getRegister, sendActivateEmail } from "../action";
import { ThemeContext } from "../../../Provider/ThemeProvider";

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const onRegister = () => {
        if (email === "") {
            alert("Email not be empty");
            return;
        }

        if (username === "") {
            alert("User name not be empty");
            return;
        }

        if (password === "") {
            alert("Password not be empty");
            return;
        }

        if (password.length < 6) {
            alert("Password must at least 6 character.");
            return;
        }

        if (password !== rePassword) {
            alert("Repassword must same as password.");
            return;
        }

        getRegister(username, email, password, phone)
            .then(res => res.json())
            .then(res => {
                if (res.message === "OK") {
                    // sendActivateEmail(email)
                    //     .catch(err => console.log("SEND EMAIL FIRST TIME ERRRR", err));
                    // api register đã tự gửi send JWT
                    props.navigation.navigate("ActivateAccount", { email: email });
                } else {
                    alert(res.message);
                }
            })
            .catch(err => console.log("SEND LOGIN ERR", err))
    }

    return (
        <ThemeContext.Consumer>
            {
                ({ language }) => {
                    return (
                        <View style={styles.home}>
                            <ScrollView style={styles.view}>

                                <Text style={styles.textHeader}>{language.registerscreen.title}</Text>

                                <View style={styles.viewInsert} />

                                <View style={styles.viewBorder}>
                                    <Text style={styles.text}>Email *</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={email => setEmail(email)}
                                    />
                                </View>

                                <View style={styles.viewInsert} />

                                <View style={styles.viewBorder}>
                                    <Text style={styles.text}>{language.registerscreen.username}</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={userName => setUsername(userName)}
                                    >
                                    </TextInput>
                                </View>

                                <View style={styles.viewInsert} />

                                <View style={styles.viewBorder}>
                                    <Text style={styles.text}>{language.registerscreen.phone}</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={phone => setPhone(phone)}
                                    />
                                </View>

                                <View style={styles.viewInsert} />

                                <View style={styles.viewBorder}>
                                    <Text style={styles.text}>{language.registerscreen.password}</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={password => setPassword(password)}
                                        secureTextEntry={true}
                                    >
                                    </TextInput>
                                </View>

                                <View style={styles.viewInsert} />


                                <View style={styles.viewBorder}>
                                    <Text style={styles.text}>{language.registerscreen.repassword}</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={rePassword => setRePassword(rePassword)}
                                        secureTextEntry={true}
                                    >
                                    </TextInput>
                                </View>

                                <View style={styles.viewInsert} />

                                <Text style={styles.textFooter}>{language.registerscreen.required}</Text>

                                <View style={styles.viewInsert2} />

                                <TouchableOpacity style={styles.buttonSignIn} onPress={() => onRegister()}>
                                    <Text style={styles.textSignIn}>{language.registerscreen.registerbutton}</Text>
                                </TouchableOpacity>

                                <View style={styles.viewInsert2} />

                            </ScrollView>
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
        fontSize: 17,
        alignSelf: 'center'
    },
    textFooter: {
        color: 'white',
        fontSize: 12,
        alignSelf: 'flex-start'
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


});

export default Register;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const Login = (props) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const signInClick = () => {
        if (user === "admin" && password === "123") {
            props.navigation.navigate('TabBar');
        } else {
            alert("Wrong username or password!");
        }
    }

    return (
        <View style={styles.home}>
            <View style={styles.view}>

                <View style={styles.viewInsert2} />

                <View style={styles.viewBorder}>
                    <Text style={styles.text}>Username (or Email)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="username"
                        placeholderTextColor="#4B4541"
                        onChangeText={user => setUser(user)}
                    />
                </View>

                <View style={styles.viewInsert} />

                <View style={styles.viewBorder}>
                    <Text style={styles.text}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="***"
                        placeholderTextColor="#4B4541"
                        onChangeText={password => setPassword(password)}
                    >
                    </TextInput>
                </View>

                <View style={styles.viewInsert2} />

                <TouchableOpacity style={styles.buttonSignIn}
                    onPress={() => signInClick()}
                >
                    <Text style={styles.textSignIn}>SIGN IN</Text>
                </TouchableOpacity>
                <View style={styles.viewInsert} />
                <TouchableOpacity style={styles.buttonForgotAndSignUp}
                    onPress={() => props.navigation.navigate('ForgotPassword')}
                >
                    <Text style={styles.textOrther}>FORGOT PASSWORD</Text>
                </TouchableOpacity>
                <View style={styles.viewInsert} />
                <TouchableOpacity style={styles.buttonSSO}>
                    <Text style={styles.textOrther}>USE SINGLE SIGN-ON (SSO)</Text>
                </TouchableOpacity>
                <View style={styles.viewInsert} />
                <TouchableOpacity style={styles.buttonForgotAndSignUp}
                    onPress={() => props.navigation.navigate('Register')}
                >
                    <Text style={styles.textOrther}>SIGN UP FREE</Text>
                </TouchableOpacity>

            </View>

        </View>
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
    buttonForgotAndSignUp: {
        backgroundColor: 'black',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonSSO: {
        backgroundColor: 'black',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        borderColor: '#3399FF',
        borderWidth: 3,
    },
});

export default Login;

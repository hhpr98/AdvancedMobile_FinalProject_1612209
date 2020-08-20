import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { forgotPasswordReset } from "../action";

const ForgotPasswordReset = (props) => {

    const userId = props.route.params.userId;
    const [newPassword, setNewPassword] = useState("");
    const [renewPassword, setRenewPassword] = useState("");

    const OnResetPasswordClick = () => {
        if (newPassword.length < 6) {
            alert("Mật khẩu mới phải có tối thiểu 6 kí tự.");
            return;
        }

        if (newPassword !== renewPassword) {
            alert("Mật khẩu nhập lại phải trùng với mật khẩu mới.");
            return;
        }

        forgotPasswordReset(userId, renewPassword)
            .then(res => res.json())
            .then(res => {
                if (res.message === "Mật khẩu đã được đổi") {
                    alert(res.message);
                    props.navigation.navigate("Login");
                } else {
                    alert(res.message);
                }
            })
            .catch(err => console.log("RESET PASSWORD API FAILLLL", err))
    }

    return (
        <View style={styles.home}>
            <View style={styles.view}>

                <Text style={styles.textHeader}>Forgot password</Text>

                <View style={styles.viewInsert2} />

                <Text style={styles.textFooter}>Change your new password</Text>

                <View style={styles.viewInsert2} />

                <View style={styles.viewBorder}>
                    <Text style={styles.text}>New Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={pass => setNewPassword(pass)}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.viewInsert} />

                <View style={styles.viewBorder}>
                    <Text style={styles.text}>Renew Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={pass => setRenewPassword(pass)}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.viewInsert2} />

                <TouchableOpacity
                    style={styles.buttonSignIn}
                    onPress={() => OnResetPasswordClick()}
                >
                    <Text style={styles.textSignIn}>RESET PASSWORD</Text>
                </TouchableOpacity>

                <View style={styles.viewInsert} />

                <TouchableOpacity
                    style={styles.buttonCancel}
                    onPress={() => props.navigation.navigate("Login")}
                >
                    <Text style={styles.textSignIn}>CANCEL</Text>
                </TouchableOpacity>

                <View style={styles.viewInsert2} />

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

export default ForgotPasswordReset;

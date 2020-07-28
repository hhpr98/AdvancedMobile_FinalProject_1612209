import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

const ForgotPassword = (props) => {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.home}>
            <View style={styles.view}>

                <Text style={styles.textHeader}>Forgot password</Text>

                <View style={styles.viewInsert2}/>

                <Text style={styles.textFooter}>Enter your email address and we'll send you link to reset your
                    password</Text>

                <View style={styles.viewInsert2}/>

                <View style={styles.viewBorder}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={email => setEmail(email)}
                        value={email}
                    />
                </View>

                <View style={styles.viewInsert2}/>

                <TouchableOpacity style={styles.buttonSignIn}>
                    <Text style={styles.textSignIn}>SEND EMAIL</Text>
                </TouchableOpacity>

                <View style={styles.viewInsert}/>

                <TouchableOpacity style={styles.buttonCancel}>
                    <Text style={styles.textSignIn}>CANCEL</Text>
                </TouchableOpacity>

                <View style={styles.viewInsert2}/>

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
    buttonCancel: {
        backgroundColor: '#222222',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
    },


});

export default ForgotPassword;

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SignInRequired = () => {

    return (
        <View style={styles.view}>
            <Text style={styles.text1}>Sign in to skill up today</Text>
            <Text style={styles.text2}>Keep your skills up-to-date with access to </Text>
            <Text style={styles.text2}>thounsands of courses by industry experts.</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text3}>SIGN IN TO START WATCHING</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        margin:20,
    },
    text1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom:5,
    },
    text2: {
        color: 'white',
        fontSize: 14,
    },
    text3: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        backgroundColor: '#3399FF',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
    }
});

export default SignInRequired;

import React, { useState } from 'react';
import { StyleSheet, TextInput, View, ImageBackground } from 'react-native';

const Contact = (props) => {
    const [text, setText] = useState('How can we help you?');

    return (
        <View style={styles.home}>
            <ImageBackground source={require('../../../../assets/ic_homegreeting_background.jpg')} style={styles.imagebackground}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setText(text)}
                    value={text}
                />
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    home: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'black'
    },
    input: {
        height: 40,
        margin: 10,
        color: 'white',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 3,
    },
    imagebackground: {
        height: 160,
        resizeMode: 'cover',
        justifyContent: 'center',
        margin: 5,
    }
});

export default Contact;

import React from 'react';
import {View, ImageBackground, StyleSheet, TouchableOpacity, Text} from 'react-native';

const LittleImageButton = (props) => {

    return (
        <ImageBackground source={require('../../../../../assets/ic_browse_2.jpg')} style={styles.image}>
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        height:80,
        width:160,
        resizeMode: 'cover',
        justifyContent: 'center',
        margin:5,
    },
    touch: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'white',
        alignSelf: 'center',
    }

});

export default LittleImageButton;

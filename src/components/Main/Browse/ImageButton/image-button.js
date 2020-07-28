import React from 'react';
import {View, ImageBackground, StyleSheet, TouchableOpacity, Text} from 'react-native';

const ImageButton = (props) => {

    return (
        <ImageBackground source={require('../../../../../assets/ic_browse_1.jpg')} style={styles.image}>
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.text}>{props.title1}</Text>
                <Text style={styles.text}>{props.title2}</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 160,
        resizeMode: 'cover',
        justifyContent: 'center',
        margin: 5,
    },
    touch: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 27,
        color: 'white',
        alignSelf: 'center',
    }

});

export default ImageButton;

import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const Greeting = (props) => {
    const content = "This app is using for learing. For more information, please click Contact tab or call 772211. Let enjoys!";
    //const img = {uri: '../../../../../assets/ic_homegreeting_background.jpg'};

    return (
        <ImageBackground style={styles.image} source={require('../../../../../assets/ic_browse_1.jpg')}>
            <Text style={styles.title}>Hello {props.name} ! Welcome to Learning App!</Text>
            <Text style={styles.content}>{content}</Text>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    image: {
        height:220,
        resizeMode: "cover",
        justifyContent: "center"
    },
    title: {
        margin:10,
        color:'white',
    },
    content: {
        margin:10,
        color:'white',
        fontSize:17,
        fontWeight:'bold'
    }
});

export default Greeting;

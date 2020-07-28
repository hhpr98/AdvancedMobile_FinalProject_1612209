import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Download = () => {

    return (
        <View style={styles.home}>
            <Image source={require('../../../../assets/icon8_download.png')} style={styles.image} />
            <Text style={styles.text1}>No downloads</Text>
            <Text style={styles.text2}>Courses you download will appear here</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: 'black',
        //flexDirection:'column',
        //display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 100
    },
    text1: {
        margin: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    text2: {
        color: 'white',
    }
});

export default Download;

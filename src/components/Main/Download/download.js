import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ThemeContext } from "../../../Provider/ThemeProvider";

const Download = () => {

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, language }) => {
                    return (
                        <View style={styles.home}>
                            <Image source={require('../../../../assets/icon8_download.png')} style={styles.image} />
                            <Text style={styles.text1}>{language.downloadscreen.status}</Text>
                            <Text style={styles.text2}>{language.downloadscreen.detail}</Text>
                        </View>
                    )
                }
            }
        </ThemeContext.Consumer>

    );
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: 'black',
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

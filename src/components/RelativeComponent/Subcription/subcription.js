import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Subscription = (props) => {
    return (
        <View style={styles.home}>
            <View style={styles.head}>
                <Image source={require('../../../../assets/ic_people_author.png')} style={styles.image} />
                <Text style={styles.textHead}>Nguyễn Hữu Hòa</Text>
            </View>
            <View style={styles.v}>
                <Image source={require('../../../../assets/ic_youtube.png')} style={styles.image2} />
                <Text style={styles.text1}>youtube.com/nguyenhuuhoa1998</Text>
            </View>
            <View style={styles.v}>
                <Image source={require('../../../../assets/ic_facebook.png')} style={styles.image2} />
                <Text style={styles.text1}>fb.com/nguyenhuuhoa15.04.1998</Text>
            </View>
            <View style={styles.v}>
                <Image source={require('../../../../assets/ic_twitter.png')} style={styles.image2} />
                <Text style={styles.text1}>tf.com/hoanguyenhuu</Text>
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
    head: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: -10,
    },
    textHead: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    text1: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 20,

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#333333'
    },
    image2: {
        width: 50,
        height: 50,
    },
    v: {
        alignContent: 'center',
        flexDirection: 'row',
        margin: 20,
    }
});

export default Subscription;

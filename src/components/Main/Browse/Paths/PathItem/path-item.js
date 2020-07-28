import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PathItem = (props) => {

    return (
        <View style={styles.item}>
            <Image source={require('../../../../../../assets/icons8_web.png')} style={styles.image} />
            <View style={{ margin: 5, }}>
                <Text style={styles.text1}>{props.item.name}</Text>
                <Text style={styles.text2}>{props.item.number}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        margin: 5,
        width: 200,
        height: 200,
        backgroundColor: '#333333'
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
    },
    text2: {
        fontSize: 12,
        color: 'white',
    },
    image: {
        width: 200,
        height: 100
    }
});

export default PathItem;

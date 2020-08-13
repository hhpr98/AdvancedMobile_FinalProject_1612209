import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const SectionCoursesItem = (props) => {
    const getCourseString = (item) => {
        return item.contentPoint + 'point . ' + item.createdAt.substring(0,10) + ' . ' + item.totalHours + 'h';
    };

    const getImageURL = (item) => {
        return item.imageUrl;
    };

    /*
    <Image source={require('../../../../../assets/icons8_java.png')} style={styles.image}/>
     */

    return (
        <View style={styles.item}>
            <Image
                source={{ uri: getImageURL(props.item) }}
                style={styles.image}
            />
            <View style={{ margin: 5, }}>
                <Text style={styles.text1}>{props.item.title}</Text>
                <Text style={styles.text2}>{props.item["instructor.user.name"]}</Text>
                <Text style={styles.text2}>{getCourseString(props.item)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        margin: 5,
        width: 240,
        height: 220,
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
        width: 240,
        height: 100,
        resizeMode: 'stretch',
    }
});

export default SectionCoursesItem;

import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const SectionCoursesItem = (props) => {
    const getCourseString = (item) => {
        return item.level + ' . ' + item.released + ' . ' + item.duration;
    };

    const getImageURL = (item) => {
      return item.imageURL;
    };

    return (
        <View style={styles.item}>
            <Image source={require('../../../../../assets/icons8_java.png')} style={styles.image}/>
            <View style={{margin:5,}}>
                <Text style={styles.text1}>{props.item.title}</Text>
                <Text style={styles.text2}>{props.item.author}</Text>
                <Text style={styles.text2}>{getCourseString(props.item)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        margin:5,
        width: 200,
        height: 200,
        backgroundColor: 'dimgray'
    },
    text1: {
        fontWeight:'bold',
        fontSize:17,
        color:'white',
    },
    text2: {
        fontSize:12,
        color:'white',
    },
    image: {
        width: 200,
        height: 100
    }
});

export default SectionCoursesItem;

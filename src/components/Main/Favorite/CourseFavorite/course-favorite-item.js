import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const CourseFavoriteItem = (props) => {

    const getCourseString = (item) => {
        return item.level + ' . ' + item.released + ' . ' + item.duration;
    };

    return (
        <View style={styles.home}>
            <Image
                source={{uri: props.item.imageURL}}
                style={styles.image}
            />
            <View style={{margin:5,marginRight:30,}}>
                <Text style={styles.text1}>{props.item.title}</Text>
                <Text style={styles.text2}>{props.item.author}</Text>
                <Text style={styles.text2}>{getCourseString(props.item)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    home: {
        flex:1,
        backgroundColor: 'black',
        flexDirection:'row',
        marginTop:20,
        borderBottomColor:'white',
        borderBottomWidth:1,
    },
    image: {
        width: 150,
        height: 100,
        marginBottom:10,
    },
    text1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    text2: {
        color: 'white',
        fontSize: 14,
    },
    textButton: {
        margin: 20,
        color: '#3399FF',
        fontWeight: 'bold',
        fontSize: 17,
    },
});

export default CourseFavoriteItem;

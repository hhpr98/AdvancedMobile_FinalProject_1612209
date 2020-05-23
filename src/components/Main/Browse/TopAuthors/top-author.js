import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';

const TopAuthor = () => {
    const data = ['Mr.An','Hong Thai','John','Sylas','Mary','Hao Pham','Truc Nguyen'];

    const getAuthorList = (authors) => {
        return authors.map(item =>
            <TouchableOpacity onPress={()=>alert(item)}>
                <Image style={styles.image} source={require('../../../../../assets/ic_people_author.png')}/>
                <Text style={styles.textAuthor}>{item}</Text>
            </TouchableOpacity>
        )
    };


    return (
        <View>
            <View style={styles.view}>
                <Text style={styles.textTitle}>TopAuthor</Text>
                <ScrollView horizontal={true}>
                    {getAuthorList(data)}
                </ScrollView>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection:'column',
    },
    textTitle: {
        fontWeight:'bold',
        fontSize:17,
        color: 'white',
        marginLeft: 10,
    },
    textButton: {
        fontSize:12,
        color: 'white',
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 120,
        backgroundColor: 'white',
        margin:10,
    },
    textAuthor: {
        fontSize:12,
        color: 'white',
        marginTop: 10,
        marginBottom: 20,
        width: 100,
        alignSelf: 'center',
        textAlign: 'center'
    }
});

export default TopAuthor;

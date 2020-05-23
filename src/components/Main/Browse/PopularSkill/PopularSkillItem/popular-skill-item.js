import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PopularSkillsItem = (props) => {

    return (
        <View style={styles.view}>
            <TouchableOpacity
               //onPress={()=>alert('Oh, No anything!')}
            >
                <Text style={styles.text}>{props.content}</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#222222',
        height: 35,
        margin: 10,
        justifyContent: 'center',
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 15,
    }
});

export default PopularSkillsItem;

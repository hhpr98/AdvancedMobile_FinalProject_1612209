import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Greeting = (props) => {
    const content = "This app is using for learing. For more information, please click Contact tab or call 772211. Let enjoys!";

    return (
        <View style={{backgroundColor:'#333333',}}>
            <Text style={styles.title}>Hello {props.name} ! Welcome to Learning App!</Text>
            <Text style={styles.content}>{content}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    title: {
        margin:10,
        color:'white',
    },
    content: {
        margin:10,
        color:'white',
        fontSize:17,
    }
});

export default Greeting;

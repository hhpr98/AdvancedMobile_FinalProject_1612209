import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const FeedBack = (props) => {

    const [text, setText] = useState('');

    return (
        <View style={styles.home}>
            <TextInput
                style={styles.input}
                onChangeText={text => setText(text)}
                placeholder="Learning app feedback"
                placeholderTextColor="white"
                multiline={true}
                numberOfLines={10} // only android
            />
            <TouchableOpacity style={styles.buttonSend} onPress={() => alert("Send feedback successfully!")}>
                <Text style={styles.textSend}>Send</Text>
            </TouchableOpacity>
        </View >

    )
};

const styles = StyleSheet.create({
    home: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'black'
    },
    input: {
        height: 150,
        margin: 20,
        color: 'black',
        borderColor: 'lightgray',
        borderWidth: 1,
        textAlign: "left",
        backgroundColor: "white",
    },
    buttonSend: {
        backgroundColor: 'black',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: '#3399FF',
        margin: 20,
        borderWidth: 3,
    },
    textSend: {
        color: '#3399FF',
        fontSize: 17,
        textAlign: 'center',
    },
});


export default FeedBack;

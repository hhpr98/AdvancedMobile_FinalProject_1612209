import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, UseState} from 'react-native';

const Search = () => {
    const [text,setText] = useState('Search...');

    const onFocusText = () => {
        setText('');
    };

    return (
        <View style={styles.home}>
            <View style={{backgroundColor: '#222222', }}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setText(text)}
                    value={text}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    home: {
        flexDirection:'column',
        flex:1,
        backgroundColor: 'black'
    },
    input: {
        height: 40,
        //borderColor: 'gray',
        //borderWidth: 1,
        margin:10,
        color:'white',
        borderBottomColor:'lightgray',
        borderBottomWidth: 3,
    }
});

export default Search;

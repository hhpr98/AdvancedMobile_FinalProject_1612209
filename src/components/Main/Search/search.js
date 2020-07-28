import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import CourseFavoriteItem from "../Favorite/CourseFavorite/course-favorite-item";

const Search = () => {
    const [text, setText] = useState('Search...');

    const onFocusText = () => {
        setText('');
    };

    const courses = [
        {
            id: 1,
            title: 'React Native',
            author: 'Mr. Hai',
            level: 'Advanced',
            released: 'April 15, 2020',
            duration: '42 hours',
            imageURL: 'https://reactjs.org/logo-og.png',
        },
        {
            id: 2,
            title: 'React JS',
            author: 'Mr. Quy',
            level: 'Advanced',
            released: 'Feb 22, 2002',
            duration: '37 hours',
            imageURL: 'data:image/png;base64,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',
        },
    ];

    const renderListItems = (courses) => {
        return courses.map(item =>
            <TouchableOpacity
            //onPress={()=>props.navigation.navigate('CourseDetail',item)}
            >
                <CourseFavoriteItem item={item} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.home}>
            <View style={{ backgroundColor: '#222222', }}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setText(text)}
                    value={text}
                />
            </View>
            <ScrollView>
                {renderListItems(courses)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    home: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'black'
    },
    input: {
        height: 40,
        //borderColor: 'gray',
        //borderWidth: 1,
        margin: 10,
        color: 'white',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 3,
    }
});

export default Search;

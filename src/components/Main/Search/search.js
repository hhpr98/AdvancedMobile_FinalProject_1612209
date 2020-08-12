import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import CourseFavoriteItem from "../Favorite/CourseFavorite/course-favorite-item";
import { ThemeContext } from "../../../../App";
import { DataContext } from "../../../Provider/DataProvider";

const Search = (props) => {
    const [text, setText] = useState('Search...');

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
        <ThemeContext>
            {
                ({ theme }) => {
                    return (
                        <DataContext.Consumer>
                            {
                                ({ data }) => {
                                    return (
                                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                                            <View style={{ backgroundColor: theme.foreground, }}>
                                                <TextInput
                                                    style={{ ...styles.input, color: theme.background }}
                                                    onChangeText={text => setText(text)}
                                                    value={text}
                                                />
                                            </View>
                                            <ScrollView>
                                                {renderListItems(data.searchCourses)}
                                            </ScrollView>
                                        </View>
                                    );
                                }
                            }
                        </DataContext.Consumer>
                    )
                }
            }
        </ThemeContext>
    )
};

const styles = StyleSheet.create({
    home: {
        flexDirection: 'column',
        flex: 1,
        //backgroundColor: 'black'
    },
    input: {
        height: 40,
        margin: 10,
        //color: 'white',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 3,
    }
});

export default Search;

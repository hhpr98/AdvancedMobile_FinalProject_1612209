import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from "../../../../../App";

const SearchCourse = (props) => {

    return (
        <ThemeContext>
            {
                ({ theme }) => {
                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                            <Text style={{ color: theme.foreground }}>ONE</Text>
                        </View>
                    );
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
});

export default SearchCourse;
import React, { useEffect, useState, useReducer } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";
import { ThemeContext } from "../../../../../App";

const SectionCourses = (props) => {

    const renderListItems = (courses) => {
        return courses.map(item =>
            <TouchableOpacity onPress={() => props.navigation.navigate('CourseDetail', { id: item.id })}>
                <SectionCoursesItem item={item} />
            </TouchableOpacity>
        );
    };

    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => {
                    return (
                        <View style={styles.cons}>
                            <View style={styles.view}>
                                {props.isLoading && <ActivityIndicator size="large" color="blue" />}
                                <Text style={{ ...styles.textTitle, color: theme.foreground }}>{props.title}</Text>
                                <TouchableOpacity onPress={() => alert('See all clicked !')}>
                                    <Text style={{ ...styles.textButton, color: theme.foreground }}>See all ></Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView horizontal={true}>
                                {renderListItems(props.courses)}
                            </ScrollView>
                        </View>
                    );
                }
            }
        </ThemeContext.Consumer>
    )
};

const styles = StyleSheet.create({
    cons: {
        marginBottom: 10,
    },
    view: {
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        //color: 'white',
        marginLeft: 10,
    },
    textButton: {
        fontSize: 12,
        //color: 'white',
        marginRight: 10,
    }
});

export default SectionCourses;

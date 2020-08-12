import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";
import { ThemeContext } from "../../../../../App";

const SectionCourses = (props) => {
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
            title: 'Java for Beginner',
            author: 'Mr. Siro',
            level: 'Basic',
            released: 'Mar 15, 2019',
            duration: '22 hours',
            imageURL: 'https://cdn.iconicjob.vn/prod/wp-content/uploads/2019/06/07164528/java-la-gi-3.jpg',
        },
        {
            id: 3,
            title: 'Web Dev',
            author: 'NLHD',
            level: 'Intermediate',
            released: 'Feb 2, 2020',
            duration: '35 hours',
            imageURL: 'data:image/jpeg;base64,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',
        },
        {
            id: 4,
            title: 'React JS',
            author: 'Mr. Quy',
            level: 'Advanced',
            released: 'Feb 22, 2002',
            duration: '37 hours',
            imageURL: 'data:image/png;base64,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',
        }
    ];

    const renderListItems = (courses) => {
        return courses.map(item =>
            <TouchableOpacity onPress={() => props.navigation.navigate('CourseDetail', item)}>
                <SectionCoursesItem item={item} />
            </TouchableOpacity>
        );
        //return courses.map( item => alert('have one courses'));
    };

    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => {
                    return (
                        <View style={styles.cons}>
                            <View style={styles.view}>
                                <Text style={{ ...styles.textTitle, color: theme.foreground }}>{props.title}</Text>
                                <TouchableOpacity onPress={() => alert('See all clicked !')}>
                                    <Text style={{ ...styles.textButton, color: theme.foreground }}>See all ></Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView horizontal={true}>
                                {renderListItems(courses)}
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

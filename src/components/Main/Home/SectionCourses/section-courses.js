import React from 'react';
import {View, Text, ScrollView, Button, TouchableOpacity, StyleSheet} from 'react-native';
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";

const SectionCourses = (props) => {
    const courses = [
        {
            id: 1,
            title: 'React Native',
            author: 'Mr. Hai',
            level: 'Advanced',
            released: 'April 15, 2020',
            duration: '42 hours',
            imageURL: '../../../../../assets/icons8_web.png',
        },
        {
            id: 2,
            title: 'Java for Beginner',
            author: 'Mr. Siro',
            level: 'Basic',
            released: 'Mar 15, 2019',
            duration: '22 hours',
            imageURL: '../../../../../assets/icons8_java.png',
        },
        {
            id: 3,
            title: 'Web Dev',
            author: 'NLHD',
            level: 'Intermediate',
            released: 'Feb 2, 2020',
            duration: '35 hours',
            imageURL: '../../../../../assets/icons8_web.png',
        },
        {
            id: 4,
            title: 'React JS',
            author: 'Mr. Quy',
            level: 'Advanced',
            released: 'Feb 22, 2002',
            duration: '37 hours',
            imageURL: '../../../../../assets/icons8_web.png',
        }
    ];

    const renderListItems = (courses) => {
        return courses.map( item => <SectionCoursesItem item={item}/>);
        //return courses.map( item => alert('have one courses'));
    };

    return (
        <View>
            <View style={styles.view}>
                <Text style={styles.textTitle}>{props.title}</Text>
                <TouchableOpacity>
                    <Text style={styles.textButton}>See all ></Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
                {renderListItems(courses)}
            </ScrollView>
        </View>


    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection:'row',
        marginLeft: 10,
        justifyContent:'space-between',
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
    }
});

export default SectionCourses;

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
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
            <View>
                <Text>{props.title}</Text>
            </View>
            <ScrollView horizontal={true}>
                {renderListItems(courses)}
            </ScrollView>
        </View>


    );
};

export default SectionCourses;

import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import SectionCourses from "./SectionCourses/section-courses";

const Home = () => {
    return (
        <ScrollView style={styles.home}>
            <SectionCourses title='Software development'/>
            <SectionCourses title='IT operations'/>
            <SectionCourses title='Data professional'/>
            <SectionCourses title='Security professional'/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    home: {
        backgroundColor: 'black',
    }
});

export default Home;

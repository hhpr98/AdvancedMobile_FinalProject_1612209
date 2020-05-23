import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import SectionCourses from "./SectionCourses/section-courses";
import Greeting from "./Greeting/greeting";

const Home = (props) => {
    return (
        <ScrollView style={styles.home}>
            <Greeting name='Hòa'/>
            <SectionCourses navigation={props.navigation} title='Software development'/>
            <SectionCourses navigation={props.navigation} title='IT operations'/>
            <SectionCourses navigation={props.navigation} title='Data professional'/>
            <SectionCourses navigation={props.navigation} title='Security professional'/>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    home: {
        backgroundColor: 'black',

    }
});

export default Home;

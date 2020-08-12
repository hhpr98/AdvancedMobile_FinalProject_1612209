import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SectionCourses from "./SectionCourses/section-courses";
import Greeting from "./Greeting/greeting";
import { ThemeContext } from "./../../../../App";

const Home = (props) => {
    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => {
                    return (
                        <ScrollView style={{ ...styles.home, backgroundColor: theme.background }}>
                            <Greeting name='Hòa' />
                            <SectionCourses navigation={props.navigation} title='Software development' />
                            <SectionCourses navigation={props.navigation} title='IT operations' />
                            <SectionCourses navigation={props.navigation} title='Data professional' />
                            <SectionCourses navigation={props.navigation} title='Security professional' />
                        </ScrollView>

                    );
                }
            }
        </ThemeContext.Consumer>
    );
};

const styles = StyleSheet.create({
    home: {
        //backgroundColor: 'black',
    }
});

export default Home;

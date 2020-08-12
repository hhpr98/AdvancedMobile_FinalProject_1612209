import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SectionCourses from "./SectionCourses/section-courses";
import Greeting from "./Greeting/greeting";
import { ThemeContext } from "./../../../../App";
import { DataContext } from "../../../Provider/DataProvider";

const Home = (props) => {
    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => {
                    return (
                        <DataContext.Consumer>
                            {
                                ({ data }) => {
                                    return (
                                        <ScrollView style={{ ...styles.home, backgroundColor: theme.background }}>
                                            <Greeting name='Hòa' />
                                            <SectionCourses navigation={props.navigation} title='Software development' courses={data.section.software} />
                                            <SectionCourses navigation={props.navigation} title='IT operations' courses={data.section.it} />
                                            <SectionCourses navigation={props.navigation} title='Data professional' courses={data.section.data} />
                                            <SectionCourses navigation={props.navigation} title='Security professional' courses={data.section.secure} />
                                        </ScrollView>
                                    );
                                }
                            }
                        </DataContext.Consumer>
                    )
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

import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SectionCourses from "./SectionCourses/section-courses";
import Greeting from "./Greeting/greeting";
import { ThemeContext } from "./../../../../App";
import { getNewCourse, getMyFavoriteCourse, getTopRateCourse, getTopSellCourse } from "./action";

const Home = (props) => {

    const [isLoading1, setLoading1] = useState(true);
    const [isLoading2, setLoading2] = useState(true);
    const [isLoading3, setLoading3] = useState(true);
    const [topnewcourse, setTopNewCourse] = useState([]);
    const [topratecourse, setTopRateCourse] = useState([]);
    const [topsellcourse, setTopSellCourse] = useState([]);

    useEffect(() => {
        // set loading để báo hiệu ActivityIndicator load
        setLoading1(true);
        setLoading2(true);
        setLoading3(true);

        getNewCourse(10, 1)
            .then(res => res.json())
            .then(res => res.message === "OK" ? setTopNewCourse(res.payload) : setTopNewCourse([]))
            .catch(err => console.log("TOPNEW ERRR: ", err))
            .finally(() => {
                // finish loading
                setLoading1(false);
            })

        getTopRateCourse(10, 1)
            .then(res => res.json())
            .then(res => res.message === "OK" ? setTopRateCourse(res.payload) : setTopRateCourse([]))
            .catch(err => console.log("TOPRATE ERRR: ", err))
            .finally(() => {
                setLoading2(false);
            })

        getTopSellCourse(10, 1)
            .then(res => res.json())
            .then(res => res.message === "OK" ? setTopSellCourse(res.payload) : setTopSellCourse([]))
            .catch(err => console.log("TOPSELL ERRR: ", err))
            .finally(() => {
                setLoading3(false);
            })
    }, []);

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, language }) => {
                    return (
                        <ScrollView style={{ backgroundColor: theme.background }}>
                            <Greeting name='Hòa' />
                            <SectionCourses navigation={props.navigation} title={language.homescreen.course1} courses={topratecourse} isLoading={isLoading2} />
                            <SectionCourses navigation={props.navigation} title={language.homescreen.course2} courses={topnewcourse} isLoading={isLoading1} />
                            <SectionCourses navigation={props.navigation} title={language.homescreen.course3} courses={topratecourse} isLoading={isLoading2} />
                            <SectionCourses navigation={props.navigation} title={language.homescreen.course4} courses={topsellcourse} isLoading={isLoading3} />
                        </ScrollView>
                    );
                }
            }
        </ThemeContext.Consumer>
    );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SectionCourses from "./SectionCourses/section-courses";
import Greeting from "./Greeting/greeting";
import { ThemeContext } from "./../../../../App";
import { getNewCourse, getMyFavoriteCourse, getTopRateCourse, getTopSellCourse } from "./action";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRiOTQ2NTZmLTQ4M2EtNDU4Yy04YTRlLTgzZDM4MjZjYTMwMiIsImlhdCI6MTU5NzI5NDQ5OCwiZXhwIjoxNTk3MzAxNjk4fQ.No6KVcOsuTrXo44aC1t-au4D7XYWHGqUCDlk4O1AGAs";

const Home = (props) => {

    const [isLoading1, setLoading1] = useState(true);
    const [isLoading2, setLoading2] = useState(true);
    const [isLoading3, setLoading3] = useState(true);
    const [isLoading4, setLoading4] = useState(true);
    const [topnewcourse, setTopNewCourse] = useState([]);
    const [mycourse, setMyCourse] = useState([]);
    const [topratecourse, setTopRateCourse] = useState([]);
    const [topsellcourse, setTopSellCourse] = useState([]);

    useEffect(() => {
        // set loading để báo hiệu ActivityIndicator load
        setLoading1(true);
        setLoading2(true);
        setLoading3(true);
        setLoading4(true);

        getNewCourse(10, 1)
            .then(res => res.json())
            .then(res => res.message === "OK" ? setTopNewCourse(res.payload) : setTopNewCourse([]))
            .catch(err => console.log("TOPNEW ERRR: ", err))
            .finally(() => {
                // finish loading
                setLoading1(false);
            })

        getMyFavoriteCourse(token, 10, 1)
            .then(res => res.json())
            .then(res => res.message === "OK" ? setMyCourse(res.payload) : setMyCourse([]))
            .catch(err => console.log("FAVORITE COURSE ERRR: ", err))
            .finally(() => {
                setLoading2(false);
            })

        getTopRateCourse(10, 1)
            .then(res => res.json())
            .then(res => res.message === "OK" ? setTopRateCourse(res.payload) : setTopRateCourse([]))
            .catch(err => console.log("TOPRATE ERRR: ", err))
            .finally(() => {
                setLoading3(false);
            })

        getTopSellCourse(10, 1)
            .then(res => res.json())
            .then(res => res.message === "OK" ? setTopSellCourse(res.payload) : setTopSellCourse([]))
            .catch(err => console.log("TOPSELL ERRR: ", err))
            .finally(() => {
                setLoading4(false);
            })
    }, []);

    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => {
                    return (
                        <ScrollView style={{ backgroundColor: theme.background }}>
                            <Greeting name='Hòa' />
                            <SectionCourses navigation={props.navigation} title='Top new courses' courses={topnewcourse} isLoading={isLoading1} />
                            <SectionCourses navigation={props.navigation} title='My courses' courses={mycourse} isLoading={isLoading2} />
                            <SectionCourses navigation={props.navigation} title='Top rate courses' courses={topratecourse} isLoading={isLoading3} />
                            <SectionCourses navigation={props.navigation} title='Top sell courses' courses={topsellcourse} isLoading={isLoading4} />
                        </ScrollView>
                    );
                }
            }
        </ThemeContext.Consumer>
    );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";
import { ThemeContext } from "../../../../../App";

const SectionCourses = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        // set loading để báo hiệu ActivityIndicator load
        setLoading(true);
        fetch("https://api.itedu.me/course/top-sell", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                limit: 6,
                page: 1
            })
        })
            .then(res => res.json())
            .then(res => setData(res.payload))
            .catch(err => console.log("TOPSELL ERRR: ", err))
            .finally(() => {
                // finish loading
                setLoading(false);
            })
    }, []);

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
                                {isLoading && <ActivityIndicator size="large" color="blue" />}
                                <Text style={{ ...styles.textTitle, color: theme.foreground }}>{props.title}</Text>
                                <TouchableOpacity onPress={() => alert('See all clicked !')}>
                                    <Text style={{ ...styles.textButton, color: theme.foreground }}>See all ></Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView horizontal={true}>
                                {/* {renderListItems(props.courses)} */}
                                {renderListItems(data)}
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

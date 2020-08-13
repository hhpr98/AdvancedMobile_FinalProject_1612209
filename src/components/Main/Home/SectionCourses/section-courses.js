import React, { useEffect, useState, useReducer } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";
import { ThemeContext } from "../../../../../App";

const initalState = { data: [], isLoading: true, isError: false }

/*
{
    type: "ACTION....",
    data: object
}
*/

function reducer(state, action) {
    switch (action.type) {
        case "REQUEST_SECTION_COURSES_OK":
            return { ...state, data: action.data, isLoading: false }
        default:
            throw new Error()
    }
}

const SectionCourses = (props) => {
    // const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState([]);

    const [state, dispatch] = useReducer(reducer, initalState);

    useEffect(() => {
        // set loading để báo hiệu ActivityIndicator load
        //setLoading(true);
        state.isLoading = true;
        fetch("https://api.itedu.me/course/top-new", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                limit: 10,
                page: 1
            })
        })
            .then(res => res.json())
            .then(res => dispatch({ type: "REQUEST_SECTION_COURSES_OK", data: res.payload }))
            .catch(err => console.log("TOPSELL ERRR: ", err))
            .finally(() => {
                // finish loading
                // setLoading(false);
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
                                {state.isLoading && <ActivityIndicator size="large" color="blue" />}
                                <Text style={{ ...styles.textTitle, color: theme.foreground }}>{props.title}</Text>
                                <TouchableOpacity onPress={() => alert('See all clicked !')}>
                                    <Text style={{ ...styles.textButton, color: theme.foreground }}>See all ></Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView horizontal={true}>
                                {/* {renderListItems(props.courses)} */}
                                {renderListItems(state.data)}
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

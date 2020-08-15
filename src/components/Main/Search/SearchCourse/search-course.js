import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeContext } from "../../../../../App";
import SearchCourseItem from "../SearchCourse/search-course-item";

const SearchCourse = (props) => {

    const data = props.courseSearchData.data;
    const totalInPage = props.courseSearchData.totalInPage;
    const total = props.courseSearchData.total;

    const size = props.courseSearchData.length === 0 ? 0 : data.length;

    const renderCourse = () => {
        return data.map(item =>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('CourseDetail', { id: item.id })}
            >
                <SearchCourseItem navigation={props.navigation} item={item} />
            </TouchableOpacity>
        );
    }

    return (
        <ThemeContext>
            {
                ({ theme }) => {
                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                            <Text style={{ color: theme.foreground, width: 150, margin: 30, fontWeight: "bold" }}>Course</Text>
                            {
                                size === 0 ?
                                    <>
                                        <Image style={{ width: 100, height: 100, alignSelf: "center" }} source={require("../../../../../assets/ic_search_nodata.png")} />
                                        <Text style={{ color: theme.foreground, alignSelf: "center", marginTop: 10, }}>NODATA</Text>

                                    </> :
                                    <>
                                        {renderCourse()}
                                    </>
                            }
                        </View>
                    );
                }
            }
        </ThemeContext>
    )
};

const styles = StyleSheet.create({
    home: {
        flexDirection: 'column',
        flex: 1,
        //backgroundColor: 'black'
    },
});

export default SearchCourse;
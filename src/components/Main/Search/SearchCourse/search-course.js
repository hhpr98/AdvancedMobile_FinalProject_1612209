import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeContext } from "../../../../../App";
import SearchCourseItem from "../SearchCourse/search-course-item";

const SearchCourse = (props) => {

    const data = props.courseSearchData.data;
    const totalInPage = props.courseSearchData.totalInPage;
    const total = props.courseSearchData.total;

    const size = props.courseSearchData.length === 0 ? 0 : data.length;
    // giải thích cái size cho chính mình sau này :v
    // lúc chưa load đc, thì props.courseSearchData.length = 0 (tức chưa có dòng nào tên là data (props.courseSearchData.data)
    // nên lấy size của nó báo lỗi đỏ

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
                ({ theme,language }) => {
                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                            <View style={{ width: 400, height: 50, marginLeft: 10, borderBottomColor: "#3399FF", borderBottomWidth: 2, }}>
                                <Text style={{ color: "white", width: 100, height: 30, margin: 10, fontWeight: "bold", backgroundColor: "#3399FF", fontSize: 17, textAlign: "center" }}>{language.searchscreen.coursesearch}</Text>
                            </View>
                            {
                                size === 0 ?
                                    <>
                                        <Image style={{ width: 100, height: 100, alignSelf: "center", marginTop: 10, }} source={require("../../../../../assets/ic_search_nodata.png")} />
                                        <Text style={{ color: theme.foreground, alignSelf: "center", marginTop: 10, }}>{language.searchscreen.nodata}</Text>

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
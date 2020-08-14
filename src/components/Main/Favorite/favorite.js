import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import CourseLargeItem from "./CourseFavorite/course-large-item";
import { ThemeContext } from "../../../../App";
// import { DataContext } from "../../../Provider/DataProvider";
import { getMyFavoriteCourse } from "./action";
import storage from "../../../Storage/storage";

const Favorite = (props) => {

    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState("");
    const [adata, setAData] = useState([]);

    useEffect(() => {
        storage
            .load({ key: "jwt" })
            .then(ret => {
                setToken(ret.token);
                const tk = ret.token;
                LoadData(tk);
            })
            .catch(err => console.log(err.name))
            .finally()
    }, []);

    const LoadData = (tk) => {
        setLoading(true);
        getMyFavoriteCourse(tk)
            .then(res => res.json())
            .then(res => setAData(res.payload))
            .catch(err => console.log("get My favorite course err:", err))
            .finally(() => {
                setLoading(false);
            })
    }

    // refreshing data : docs: https://reactnative.dev/docs/refreshcontrol
    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        LoadData(token);
        wait(2000).then(() => setRefreshing(false));
    }, []);


    const renderListCourseItem = (courses) => {
        return courses.map(item =>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('CourseDetail', { id: item.id })}
            >
                <CourseLargeItem navigation={props.navigation} item={item} />
            </TouchableOpacity>
        );
    };

    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => {
                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                            {loading && <ActivityIndicator size="large" color="blue" />}
                            <ScrollView
                                refreshControl={
                                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                                }
                            >
                                {renderListCourseItem(adata)}
                            </ScrollView>
                        </View>

                    );
                }
            }
        </ThemeContext.Consumer>
    )
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        //backgroundColor: 'black',
    },
    image: {
        width: 200,
        height: 100
    },
    text1: {
        margin: 20,
        //color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    textButton: {
        margin: 20,
        color: '#3399FF',
        fontWeight: 'bold',
        fontSize: 17,
    },
});

export default Favorite;

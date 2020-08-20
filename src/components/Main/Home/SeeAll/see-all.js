import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { ThemeContext } from "../../../../Provider/ThemeProvider";
import SeeAllItem from "./see-all-item";
import { getNewCourse, getTopRateCourse, getTopSellCourse } from "../action";

const SeeAll = (props) => {

    const listTitle = props.route.params.title;

    const [loading, setLoading] = useState(true);
    const [listData, setListData] = useState([]);

    useEffect(() => {
        setLoading(true);

        if (listTitle === "Top new courses" || listTitle === "Khóa học mới nhất")
            getNewCourse(100, 1)
                .then(res => res.json())
                .then(res => res.message === "OK" ? setListData(res.payload) : setListData([]))
                .catch(err => console.log("TOPNEW ERRR: ", err))
                .finally(() => {
                    setLoading(false);
                })
        else if (listTitle === "Top rate courses" || listTitle === "Khóa học đánh giá cao nhất" || listTitle === "Suggestion for you" || listTitle === "Gợi ý cho bạn")
            getTopRateCourse(100, 1)
                .then(res => res.json())
                .then(res => res.message === "OK" ? setListData(res.payload) : setListData([]))
                .catch(err => console.log("TOPRATE ERRR: ", err))
                .finally(() => {
                    setLoading(false);
                })
        else if (listTitle === "Top sell courses" || listTitle === "Khóa học được mua nhiều nhất")
            getTopSellCourse(10, 1)
                .then(res => res.json())
                .then(res => res.message === "OK" ? setListData(res.payload) : setListData([]))
                .catch(err => console.log("TOPSELL ERRR: ", err))
                .finally(() => {
                    setLoading(false);
                })
        else {
            setListData([]);
            setLoading(false);
        }
    }, []);

    const renderCourse = (courses) => {
        return courses.map(item =>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('CourseDetail', { id: item.id })}
            >
                <SeeAllItem navigation={props.navigation} item={item} />
            </TouchableOpacity>
        );
    }

    return (
        <ThemeContext>
            {
                ({ theme }) => {
                    return (
                        <ScrollView style={{ ...styles.home, backgroundColor: theme.background }}>
                            {loading && <ActivityIndicator size="large" color="blue" />}
                            <View style={{ width: 400, height: 50, marginLeft: 10, borderBottomColor: "#3399FF", borderBottomWidth: 2, }}>
                                <Text style={{ color: "white", width: 200, height: 30, margin: 10, fontWeight: "bold", backgroundColor: "#3399FF", fontSize: 17, textAlign: "center" }}>{listTitle}</Text>
                            </View>
                            {renderCourse(listData)}
                        </ScrollView>
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

export default SeeAll;
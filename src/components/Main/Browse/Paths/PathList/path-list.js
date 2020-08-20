import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { ThemeContext } from "../../../../../Provider/ThemeProvider";
import PathListItem from "./path-list-item";
import { searchWithCourseId } from "../../../Search/action";
import storage from "../../../../../Storage/storage";

const PathList = (props) => {

    const pathId = props.route.params.pathId;
    const pathTitle = props.route.params.pathTitle;

    const [loading, setLoading] = useState(true);
    const [listData, setListData] = useState([]);

    useEffect(() => {
        setLoading(true);
        storage
            .load({ key: "jwt" })
            .then(ret => {
                const tk = ret.token;
                searchWithCourseId(tk, pathId)
                    .then(res => res.json())
                    .then(res => {
                        if (res.message === "OK") {
                            const ls = res.payload.courses;
                            // console.log(res.payload.courses.total);
                            ls.length === 0 ? setListData([]) : setListData(ls.data);
                        }
                    })
                    .catch(err => console.log("SEARCH WITH path Id faillll", err))
            })
            .catch(err => console.log(err.name))
            .finally(() => setLoading(false))
    }, [])

    const size = listData.length;

    const renderCourse = (courses) => {
        return courses.map(item =>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('CourseDetail', { id: item.id })}
            >
                <PathListItem navigation={props.navigation} item={item} />
            </TouchableOpacity>
        );
    }

    return (
        <ThemeContext>
            {
                ({ theme, language }) => {
                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                            <View style={{ width: 400, height: 50, marginLeft: 10, borderBottomColor: "#3399FF", borderBottomWidth: 2, }}>
                                <Text style={{ color: "white", width: 200, height: 30, margin: 10, fontWeight: "bold", backgroundColor: "#3399FF", fontSize: 17, textAlign: "center" }}>{pathTitle}</Text>
                            </View>
                            <ScrollView>
                                {loading && <ActivityIndicator size="large" color="blue" />}
                                {
                                    size === 0 ?
                                        <>
                                            <Image style={{ width: 100, height: 100, alignSelf: "center", marginTop: 10, }} source={require("../../../../../../assets/ic_search_nodata.png")} />
                                            <Text style={{ color: theme.foreground, alignSelf: "center", marginTop: 10, }}>{language.searchscreen.nodata}</Text>

                                        </> :
                                        <>
                                            {renderCourse(listData)}
                                        </>
                                }
                            </ScrollView>
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

export default PathList;
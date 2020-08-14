import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import CourseLargeItem from "./CourseFavorite/course-large-item";
import { ThemeContext } from "../../../../App";
import { DataContext } from "../../../Provider/DataProvider";

const Favorite = () => {

    const renderListItems = (courses) => {
        return courses.map(item =>
            <TouchableOpacity
            //onPress={()=>props.navigation.navigate('CourseDetail',item)}
            >
                <CourseLargeItem item={item} />
            </TouchableOpacity>
        );
    };

    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => {
                    return (
                        <DataContext.Consumer>
                            {
                                ({ data }) => {
                                    return (
                                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                                                <Text style={{ ...styles.text1, color: theme.foreground }}>4 courses (440MB)</Text>
                                                <TouchableOpacity
                                                    onPress={() => alert('remove!')}
                                                >
                                                    <Text style={styles.textButton}>Remove all</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <ScrollView>
                                                {renderListItems(data.favoritecourses)}
                                            </ScrollView>
                                        </View>

                                    );
                                }
                            }
                        </DataContext.Consumer>
                    )
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

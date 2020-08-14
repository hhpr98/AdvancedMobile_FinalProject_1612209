import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import CourseLargeItem from "./CourseFavorite/course-large-item";
import { ThemeContext } from "../../../../App";
import { DataContext } from "../../../Provider/DataProvider";

const Favorite = () => {

    const renderListCourseItem = (courses) => {
        return courses.map(item =>
            <TouchableOpacity
            //onPress={()=>props.navigation.navigate('CourseDetail',item)}
            >
                <CourseLargeItem item={item} />
            </TouchableOpacity>
        );
    };

    const adata = [
        {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "courseTitle": "Toàn tập ngôn ngữ lập trình C#",
            "coursePrice": 179000,
            "courseImage": "https://miro.medium.com/max/1600/1*Wn-VNxeuGoRz83wxnJLjOQ.png",
            "instructorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "instructorName": "Phạm Hoàng Hải",
            "courseSoldNumber": 28,
            "courseContentPoint": 4.6,
            "courseFormalityPoint": 4.6,
            "coursePresentationPoint": 4.6,
            "courseAveragePoint": 4.6
        },
        {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "courseTitle": "Toàn tập ngôn ngữ lập trình C#",
            "coursePrice": 179000,
            "courseImage": "https://miro.medium.com/max/1600/1*Wn-VNxeuGoRz83wxnJLjOQ.png",
            "instructorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "instructorName": "Phạm Hoàng Hải",
            "courseSoldNumber": 28,
            "courseContentPoint": 4.6,
            "courseFormalityPoint": 4.6,
            "coursePresentationPoint": 4.6,
            "courseAveragePoint": 3.1
        }
    ]

    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => {
                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                            <ScrollView>
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

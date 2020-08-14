import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const CourseDetailItem = (props) => {

    const [hourTotal, setHourTotal] = useState(0);

    // get phần (part)
    const section = props.item;

    useEffect(() => {
        // get time của part
        section.lesson.forEach(item => setHourTotal(Number(hourTotal) + Number(item.hours)));
    }, []);

    const renderMiniItem = (val) => {
        return val.map(item =>
            //console.log(item)
            <TouchableOpacity
                style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}
                onPress={() => {

                    //alert("URL: " + item.videoUrl)
                    //alert("Type:" + props.type)
                    //props.navigation.navigate("PlayingVideo", { courseId: item.courseId, lessonId: item.id })
                    if (props.type === 1)
                        props.navigation.navigate("PlayingVideoGoogleStorage", { courseId: item.courseId, lessonId: item.id })
                    else
                        props.navigation.navigate("PlayingVideoYoutube", { courseId: item.courseId, lessonId: item.id })
                }
                }
            >
                <Text style={{ color: 'white', textAlignVertical: "center" }}>{'\u2B24'} </Text>
                <Text style={{ color: 'white', width: 250, }}>{item.name}</Text>
                <Text style={{ color: 'white', textAlignVertical: "center" }}>{item.hours} hours</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <View style={styles.main}>
                <Text style={styles.textID}>{props.index + 1}</Text>
                <View>
                    <Text style={styles.text1}>{section.name}</Text>
                    <Text style={styles.text2}>{hourTotal} hours</Text>
                </View>
            </View>
            <View>{renderMiniItem(section.lesson)}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        marginTop: 20,
    },
    textID: {
        color: 'white',
        backgroundColor: '#333333',
        width: 50,
        height: 50,
        borderBottomWidth: 3,
        borderBottomColor: 'green',
        marginLeft: 20,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    text1: {
        color: 'white',
        fontSize: 17,
        marginLeft: 20,
    },
    text2: {
        color: 'white',
        fontSize: 13,
        marginLeft: 20,
    },
});

export default CourseDetailItem;

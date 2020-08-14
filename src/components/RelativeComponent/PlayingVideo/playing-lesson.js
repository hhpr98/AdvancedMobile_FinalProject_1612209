import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import storage from "../../../Storage/storage";
import { getLessonDetail, getLessonVideo } from "./action";

export default PlayingVideo = (props) => {

    const courseId = props.route.params.courseId;
    const lessonId = props.route.params.lessonId;

    return (
        <View>
            <Text>Playing video {courseId} {lessonId}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: 'black',
    },
});
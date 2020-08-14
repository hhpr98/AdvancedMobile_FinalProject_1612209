import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import storage from "../../../Storage/storage";
import { getLessonDetail, getLessonVideo } from "./action";
// import Video from 'react-native-video';
import YoutubePlayer from "react-native-youtube-iframe";
import WebView from "react-native-webview";
import { Video } from 'expo-av';

export default PlayingVideo = (props) => {

    const courseId = "da72576b-713e-4039-b6e7-761aa3426576"//props.route.params.courseId;
    const lessonId = "1493a6ad-c66e-4e18-8b61-b136e9ca9cd0"//props.route.params.lessonId;

    const [lessonDetail, setLessonDetail] = useState([]);
    const [lessonVideo, setLessonVideo] = useState([]);

    const urlllll = "https://storage.googleapis.com/itedu-bucket/Courses/da72576b-713e-4039-b6e7-761aa3426576/1493a6ad-c66e-4e18-8b61-b136e9ca9cd0/BLACKPINK---%27How-You-Like-That%27-DANCE-PERFORMANCE-VIDEO.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=storage-admin%40itedu-storage.iam.gserviceaccount.com%2F20200814%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20200814T074256Z&X-Goog-Expires=86401&X-Goog-SignedHeaders=host&X-Goog-Signature=3a40b5b461b2fe0432a14e9ad372e29f2131b3024062e50aa963877c661674acce2b13c416d4594b80abcf7040440572460bc64a58754c65eb74f86119b21f9f2c3e3d0c22a4a6d34609fa4b2e3c9e457b1b29e26a308753e09bb15f35e3232aaca48e36365a593de0ba4fcaaab40d2d5fd50bfb85614c070bd35bfe9f6a92c1ad644b0a7ed7108995256446a66c91ff1b8b675b2dd661b895985d443f883df2d6ddef7cffbdf04142a813547d9f30672fe9fa6b19c2d51f4f3644b875f6bd9f17242e31b7f3964184504d8912cbffc33781b52a4a8ef855b8024a180b92ce5e783ee9e3e4e8c331a8827df815a65f10edd70b94d559477622dcd711f557e07d"

    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    return (
        <View>
            <Text>Playing video {courseId} {lessonId}</Text>
            <Video
                source={{ uri: urlllll }}
                rate={1.0}
                volume={50}
                resizeMode="cover"
                shouldPlay={playing}
                useNativeControls
                isLooping
                style={{ width: "100%", height: "60%", backgroundColor: "lightgray" }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: 'black',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

/* // Youtube player only play youtube and need webview

        <YoutubePlayer
            ref={playerRef}
            height={300}
            width={400}
            videoId={"AVAc1gYLZK0"}
            play={playing}
            onChangeState={event => console.log(event)}
            onReady={() => console.log("ready")}
            onError={e => console.log(e)}
            onPlaybackQualityChange={q => console.log(q)}
            volume={50}
            playbackRate={1}
            initialPlayerParams={{
                cc_lang_pref: "us",
                showClosedCaptions: true
            }}
        />

*/
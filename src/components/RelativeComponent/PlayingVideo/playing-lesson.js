import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import storage from "../../../Storage/storage";
import { getLessonDetail, getLessonVideo } from "./action";
// import Video from 'react-native-video';
import YoutubePlayer from "react-native-youtube-iframe";
// import WebView from "react-native-webview";
import { Video } from 'expo-av';

export const PlayingVideoYoutube = (props) => {

    const courseId = props.route.params.courseId;
    const lessonId = props.route.params.lessonId;

    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(true);
    const [lessonDetail, setLessonDetail] = useState([]);
    const [lessonVideo, setLessonVideo] = useState([]);
    const [videoUrl, setVideoUrl] = useState("");
    const [idYoutube, setIdYoutube] = useState("");
    const playerRef = useRef(null);

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
        getLessonDetail(tk, courseId, lessonId)
            .then(res => res.json())
            .then(res => setLessonDetail(res.payload))
            .catch(err => console.log("GET LESSON DETAIL API ERR", err))
            .finally()
        getLessonVideo(tk, courseId, lessonId)
            .then(res => res.json())
            .then(res => {
                setLessonVideo(res.payload);
                setVideoUrl(res.payload.videoUrl);
                const emble = res.payload.videoUrl; // emble.includes("youtube"
                var idx = emble.lastIndexOf("embed/");
                const sub = emble.substring(idx + 6, emble.end);
                setIdYoutube(sub);
            })
            .catch(err => console.log("GET LESSON VIDEO API ERR", err))
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <View style={styles.home}>
            {loading && <ActivityIndicator size="large" color="blue" />}
            <Text style={styles.text}>{lessonDetail.name}</Text>
            {
                loading ? <></> : (
                    <YoutubePlayer
                        ref={playerRef}
                        height={300}
                        width={400}
                        videoId={idYoutube}
                        play={true}
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
                )
            }
        </View>
    )
}

export const PlayingVideoGoogleStorage = (props) => {

    const courseId = props.route.params.courseId;
    const lessonId = props.route.params.lessonId;

    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(true);
    const [lessonDetail, setLessonDetail] = useState([]);
    const [lessonVideo, setLessonVideo] = useState([]);
    const [videoUrl, setVideoUrl] = useState("");

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
        getLessonDetail(tk, courseId, lessonId)
            .then(res => res.json())
            .then(res => setLessonDetail(res.payload))
            .catch(err => console.log("GET LESSON DETAIL API ERR", err))
            .finally()
        getLessonVideo(tk, courseId, lessonId)
            .then(res => res.json())
            .then(res => {
                setLessonVideo(res.payload);
                setVideoUrl(res.payload.videoUrl);
            })
            .catch(err => console.log("GET LESSON VIDEO API ERR", err))
            .finally(() => {
                setLoading(false)
            })
    }

    return (

        <View style={styles.home}>
            {loading && <ActivityIndicator size="large" color="blue" />}
            <Text style={styles.text}>{lessonDetail.name}</Text>
            {
                loading ? <></> : (
                    <Video
                        source={{ uri: videoUrl }}
                        rate={1.0}
                        volume={50}
                        resizeMode="cover"
                        shouldPlay={true}
                        useNativeControls
                        isLooping
                        style={{ width: "100%", height: "50%", backgroundColor: "lightgray" }}
                    />
                )
            }
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
    text: {
        color: '#3399FF',
        margin: 20,
        fontWeight: 'bold',
        fontSize: 23,
        alignSelf: 'center',
        textAlign: "center"
    },
});


import React, { useEffect, useState, useReducer } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import CourseDetailItem from "./CourseDetailItem/course-detail-item";
import { checkOwnerCourse, getCourseWithLesson, getCourseWithLessonUserId } from "../action";
import storage from "../../../Storage/storage";


const initalState = { token: "", userId: "" }

function reducer(state, action) {
    switch (action.type) {
        case "GET_TOKEN":
            return { ...state, token: action.data }
        case "GET_USERID":
            return { ...state, userId: action.data }
        default:
            throw new Error()
    }
}

const CourseDetail = (props) => {

    const [isCheck, setIsCheck] = useState(false);
    const [dataSectionAndLesson, setDataSectionAndLesson] = useState([]);
    const [infor, setInfor] = useState([]);
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("0000-00-00T00:00:00");
    const [isLoading, setLoading] = useState(true);
    // const [token, setAccessToken] = useState("");
    // const [userId, setUserId] = useState("");
    const [state, dispatch] = useReducer(reducer, initalState);

    const courseId = props.route.params.id;
    // const userId = "4b94656f-483a-458c-8a4e-83d3826ca302";
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRiOTQ2NTZmLTQ4M2EtNDU4Yy04YTRlLTgzZDM4MjZjYTMwMiIsImlhdCI6MTU5NzMyNTI2NywiZXhwIjoxNTk3MzMyNDY3fQ.yHU-4iyj9I_IdR_b7Bs7ufUB8rMtWu4RjyXtkg4-wqs"

    useEffect(() => {
        storage
            .load({ key: "token" })
            .then(ret => dispatch({ type: "GET_TOKEN", data: ret }))
            .catch(err => console.log("A",err.name))
        storage
            .load({ key: "userInfo" })
            .then(ret => dispatch({ type: "GET_USERID", data: ret.id }))
            .catch(err => console.log("B",err.name))

    }, []);

    useEffect(() => {
        setIsCheck(false);
        setLoading(true);
        checkOwnerCourse(state.token, courseId)
            .then(res => res.json())
            .then(res => {
                if (res.message === "OK")
                    setIsCheck(res.payload.isUserOwnCourse)
                else
                    alert("Check join this course error! CourseId: " + courseId + " Message: " + res.message)
            })
            .catch(err => console.log(console.log("CHECK OWN COURSE ERR: ", err)))
            .finally(() => {
            })
        getCourseWithLessonUserId(state.token, courseId, state.userId)
            .then(res => res.json())
            .then(res => {
                if (res.message === "OK") {
                    setDataSectionAndLesson(res.payload.section);
                    setInfor(res.payload);
                    setAuthor(res.payload.instructor.name);
                    setDate(res.payload.createdAt);
                } else {
                    setDataSectionAndLesson([]);
                    setInfor([]);
                }
            })
            .catch(err => console.log("get Course with lesson userId err:", err))
            .finally(() => {
                setLoading(false);
            })
    }, [])

    const renderCourseDetailItem = (items) => {
        return (
            items.map((item, index) => <CourseDetailItem item={item} index={index} />)
        )
    }
    return (
        <ScrollView style={styles.home}>
            {isLoading && <ActivityIndicator size="large" color="blue" />}
            <View style={styles.v}>
                <Text style={styles.text}>{infor.title}</Text>
            </View>
            <Image source={{ uri: infor.imageUrl }} style={{ width: 350, height: 180, alignSelf: "center", resizeMode: "stretch" }} />
            <View style={styles.viewAuthor}>
                <Image source={require('../../../../assets/ic_people_author.png')} style={styles.image} />
                <Text style={styles.textAuthor}>{author}</Text>
            </View>
            <Text style={styles.textInfor}>{Math.round(Number(infor.contentPoint))} point  .  {date.substring(0, 10)}  .  {infor.totalHours} hours</Text>
            <Text style={{ ...styles.textInfor, fontSize: 17, color: "green" }}>{infor.videoNumber} videos</Text>
            <Text style={styles.textContent}>This course is free for you. Let's enjoy it. Good luck for you!</Text>
            <TouchableOpacity style={styles.button}
                onPress={() => alert('clicked !')}
            >
                <Text style={styles.textSignIn}>Take a learning check</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => console.log(dataSectionAndLesson)}
            >
                <Text style={styles.textSignIn}>View related paths & courses</Text>
            </TouchableOpacity>
            <Text style={styles.textClone}>DESCRIPTION</Text>
            <Text style={styles.textContent}>{infor.description}</Text>
            <Text style={styles.textClone}>CONTENT</Text>
            {
                isCheck ? (
                    <View>{renderCourseDetailItem(dataSectionAndLesson)}</View>
                ) : (
                        <View>
                            <Text style={{ ...styles.textContent, color: "red" }}>You hasn't join/buy this course!</Text>
                        </View>
                    )
            }

        </ScrollView>
    );
};
const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: 'black',
    },

    text: {
        color: '#3399FF',
        margin: 20,
        fontWeight: 'bold',
        fontSize: 23,
        alignSelf: 'center',
        textAlign: "center"
    },
    viewAuthor: {
        borderRadius: 50,
        backgroundColor: '#222222',
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'green',
    },
    textAuthor: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        alignSelf: 'center',
        marginLeft: 20,
    },
    textInfor: {
        color: 'white',
        fontSize: 13,
        marginLeft: 20,
    },
    textContent: {
        color: 'white',
        fontSize: 17,
        margin: 20,
    },
    button: {
        backgroundColor: '#3399FF',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
    },
    textSignIn: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    },
    textClone: {
        color: '#3399FF',
        margin: 20,
        fontSize: 23,
        marginLeft: 20,
        borderBottomColor: '#3399FF',
        borderBottomWidth: 3,
    },
});

export default CourseDetail;

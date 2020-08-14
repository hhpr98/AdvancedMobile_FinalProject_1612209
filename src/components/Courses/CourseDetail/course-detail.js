import React, { useEffect, useState, useReducer, useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import CourseDetailItem from "./CourseDetailItem/course-detail-item";
import { checkOwnerCourse, getCourseWithLesson, getCourseWithLessonUserId } from "../action";
import storage from "../../../Storage/storage";
import StarRating from 'react-native-star-rating';

const CourseDetail = (props) => {

    const [isCheck, setIsCheck] = useState(false);
    const [dataSectionAndLesson, setDataSectionAndLesson] = useState([]);
    const [infor, setInfor] = useState([]);
    const [author, setAuthor] = useState("");
    const [avartar, setAvatar] = useState("../../../../assets/ic_people_author.png");
    const [date, setDate] = useState("0000-00-00T00:00:00");
    const [isLoading, setLoading] = useState(true);
    const [ratingList, setRatingList] = useState([]);
    const [typeVideo, setTypeVideo] = useState(1); // 1:storage, 2:youtube

    const courseId = props.route.params.id;

    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        setIsCheck(false);
        storage
            .load({ key: "jwt" })
            .then(ret => {
                setToken(ret.token);
                setUserId(ret.userInfo.id);
                const tk = ret.token;
                const usid = ret.userInfo.id;
                LoadData(tk, usid);
            })
            .catch(err => console.log(err.name))
            .finally()
    }, []);

    const LoadData = (tk, usid) => {
        setLoading(true);
        checkOwnerCourse(tk, courseId)
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
        getCourseWithLessonUserId(tk, courseId, usid)
            .then(res => res.json())
            .then(res => {
                if (res.message === "OK") {
                    setDataSectionAndLesson(res.payload.section);
                    setInfor(res.payload);
                    setAuthor(res.payload.instructor.name);
                    setAvatar(res.payload.instructor.avatar);
                    setDate(res.payload.createdAt);
                    setRatingList(res.payload.ratings.ratingList.slice(0, 10));
                    setTypeVideo(res.payload.typeUploadVideoLesson);
                } else {
                    setDataSectionAndLesson([]);
                    setInfor([]);
                }
            })
            .catch(err => console.log("get Course with lesson userId err:", err))
            .finally(() => {
                setLoading(false);
            })
    }

    const renderCourseDetailItem = (items) => {
        return (
            items.map((item, index) => <CourseDetailItem navigation={props.navigation} item={item} index={index} type={typeVideo} />)
        )
    }

    const renderRatingList = (ratingList) => {
        return (
            ratingList.map(item =>
                <View style={{ borderBottomColor: "white", borderBottomWidth: 0.5, margin: 10, }}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                        <Image source={{ uri: item.user.avatar }} style={{ ...styles.image, alignSelf: "center" }} />
                        <Text style={{ ...styles.textRating, alignSelf: "center", color: "green" }}>{item.user.name}</Text>
                    </View>
                    <Text style={styles.textRating}>{item.content}</Text>
                </View>
            )
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
                <Image source={{ uri: avartar }} style={styles.image} />
                <Text style={styles.textAuthor}>{author}</Text>
            </View>
            <Text style={styles.textInfor}>{Math.round(Number(infor.contentPoint))} point  .  {date.substring(0, 10)}  .  {infor.totalHours} hours</Text>
            <Text style={{ ...styles.textInfor, fontSize: 17, color: "green" }}>{infor.videoNumber} videos</Text>
            <Text style={styles.textContent}>{infor.subtitle}</Text>
            <TouchableOpacity style={styles.button}
                onPress={() => alert('clicked !')}
            >
                <Text style={styles.textSignIn}>Take a learning check</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => alert(infor.typeUploadVideoLesson)}
            >
                <Text style={styles.textSignIn}>View related paths & courses</Text>
            </TouchableOpacity>
            <Text style={styles.textClone}>DESCRIPTION</Text>
            <Text style={styles.textContent}>{infor.description}</Text>
            <Text style={styles.textClone}>CONTENT</Text>
            {
                isCheck ? (
                    <>
                        <View>{renderCourseDetailItem(dataSectionAndLesson)}</View>
                    </>
                ) : (
                        <View>
                            <Text style={{ ...styles.textContent, color: "red" }}>You hasn't join/buy this course!</Text>
                        </View>
                    )
            }
            <Text style={styles.textClone}>RATING</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textContent}>Rating cho khóa học</Text>
                <StarRating
                    style={{ width: 200, backgroundColor: "red" }}
                    disabled={false}
                    maxStars={5}
                    rating={Math.round(Number(infor.contentPoint))}
                    fullStarColor="yellow"
                    emptyStarColor="white"
                    starSize={27}
                    containerStyle={{ width: 150, alignSelf: "center" }}
                />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 30 }}>
                <TextInput style={{ backgroundColor: "white", alignSelf: "center", width: 200, height: 70, }} onChange={() => console.log("changed")}></TextInput>
                <TouchableOpacity style={{ alignSelf: "center", }}>
                    <Text style={{ color: "blue", alignSelf: "center" }}>Thêm bình luận</Text>
                </TouchableOpacity>
            </View>
            <View>{renderRatingList(ratingList)}</View>


        </ScrollView >
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
    textRating: {
        color: 'white',
        fontSize: 13,
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

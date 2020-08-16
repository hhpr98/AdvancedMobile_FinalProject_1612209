import React, { useEffect, useState, useReducer, useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator, TextInput, ImageBackground, Share } from 'react-native';
import CourseDetailItem from "./CourseDetailItem/course-detail-item";
import { checkOwnerCourse, getCourseWithLesson, getCourseWithLessonUserId, getFreeCourse, userLikeCourse, getLikeCourseStatus, ratingACourse } from "../action";
import storage from "../../../Storage/storage";
import StarRating from 'react-native-star-rating';
import { ThemeContext } from "../../../../App";

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
    const [likeStatus, setLikeStatus] = useState(false);
    const [myrating, setMyRating] = useState(0);
    const [mycmt, setMyCmt] = useState("");

    const courseId = props.route.params.id;

    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");
    const [myname, setMyName] = useState(""); // dùng cho rating
    const [myavatar, setMyAvatar] = useState(""); // dùng cho rating

    useEffect(() => {
        setIsCheck(false);
        storage
            .load({ key: "jwt" })
            .then(ret => {
                setToken(ret.token);
                setUserId(ret.userInfo.id);
                setMyName(ret.userInfo.name);
                setMyAvatar(ret.userInfo.avatar);
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
        getLikeCourseStatus(tk, courseId)
            .then(res => res.json())
            .then(res => { if (res.message === "OK") setLikeStatus(res.likeStatus) })
            .catch(err => console.log("get Like status err:", err))
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

    const onShare = async (mess) => {
        //alert(mess);
        try {
            const result = await Share.share({
                message: mess
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const onLikeCourse = () => {
        userLikeCourse(token, courseId)
            .then(res => res.json())
            .then((res) => {
                if (res.likeStatus === true)
                    //alert("Like this course!");
                    setLikeStatus(true);
                else
                    //alert("Unlike this course!");
                    setLikeStatus(false);
            })
            .finally()
    }

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, language }) => {
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
                            <Text style={styles.textInfor}>{Math.round(Number(infor.contentPoint))} point  .  {date.substring(0, 10)}  .  {infor.totalHours} {language.coursedetail.hours}</Text>
                            <Text style={{ ...styles.textInfor, fontSize: 17, color: "green" }}>{infor.videoNumber} videos</Text>
                            <StarRating
                                style={{ width: 200, backgroundColor: "red" }}
                                disabled={false}
                                maxStars={5}
                                rating={Math.round(Number(infor.contentPoint))}
                                fullStarColor="yellow"
                                emptyStarColor="white"
                                starSize={27}
                                containerStyle={{ width: 150, marginLeft: 20, }}
                            />
                            <Text style={styles.textContent}>{infor.subtitle}</Text>

                            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20, }}>
                                {
                                    likeStatus ?
                                        <ImageBackground source={require("../../../../assets/ic_detail_like.png")} style={{ width: 50, height: 50, backgroundColor: "white" }}>
                                            <TouchableOpacity style={{ width: 50, height: 50 }} onPress={() => onLikeCourse()} />
                                        </ImageBackground> :
                                        <ImageBackground source={require("../../../../assets/ic_detail_unlike.png")} style={{ width: 50, height: 50, backgroundColor: "white" }}>
                                            <TouchableOpacity style={{ width: 50, height: 50 }} onPress={() => onLikeCourse()} />
                                        </ImageBackground>
                                }

                                <ImageBackground source={require("../../../../assets/ic_detail_share.png")} style={{ width: 50, height: 50, backgroundColor: "white" }}>
                                    <TouchableOpacity style={{ width: 50, height: 50 }} onPress={() => {
                                        const message = "https://itedu.me/course-detail/" + courseId; // lấy url khóa học dạng web
                                        onShare(message); // share
                                    }} />
                                </ImageBackground>
                                <ImageBackground source={require("../../../../assets/ic_detail_download.png")} style={{ width: 50, height: 50, backgroundColor: "white" }}>
                                    <TouchableOpacity style={{ width: 50, height: 50 }} onPress={() => alert("Download clicked!")} />
                                </ImageBackground>
                            </View>

                            <Text style={styles.textClone}>{language.coursedetail.description}</Text>
                            <Text style={styles.textContent}>{infor.description}</Text>
                            <Text style={styles.textClone}>{language.coursedetail.content}</Text>
                            {
                                isCheck ? (
                                    <>
                                        <View>{renderCourseDetailItem(dataSectionAndLesson)}</View>
                                    </>
                                ) : (
                                        <>
                                            <Text style={{ ...styles.textContent, color: "red" }}>{language.coursedetail.join}</Text>
                                            <TouchableOpacity style={styles.button}
                                                onPress={() => {
                                                    getFreeCourse(token, courseId)
                                                        .then(res => res.json())
                                                        .then(res => {
                                                            // Lỗi này trên UI web của nhóm cung cấp API cũng bị, register vẫn OK nhưng báo fail
                                                            // if (res.message === "OK" || res.message == "Bạn đã từng đăng ký khóa học này.") {
                                                            //     setIsCheck(true); //show detail course
                                                            //     alert("Register this course success. An email has send to you!");
                                                            // } else {
                                                            //     alert("Register this course fail!");
                                                            // }
                                                        })
                                                        .catch(err => console.log("GET FREE COURSE FAILL", err))
                                                        .finally(() => {
                                                            setIsCheck(true);
                                                            alert("Register this course success. An email has send to you!");
                                                        })
                                                }
                                                }
                                            >
                                                <Text style={styles.textSignIn}>{language.coursedetail.reg}</Text>
                                            </TouchableOpacity>
                                        </>
                                    )
                            }
                            <Text style={styles.textClone}>{language.coursedetail.rate.title}</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.textContent}>{language.coursedetail.rate.ratethiscourse}</Text>
                                <StarRating
                                    style={{ width: 200, backgroundColor: "red" }}
                                    disabled={false}
                                    maxStars={5}
                                    rating={myrating}
                                    fullStarColor="yellow"
                                    emptyStarColor="white"
                                    starSize={27}
                                    containerStyle={{ width: 150, alignSelf: "center" }}
                                    selectedStar={numstar => setMyRating(numstar)}
                                />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 30 }}>
                                <TextInput style={{ backgroundColor: "white", alignSelf: "center", width: 200, height: 50, }} onChangeText={txt => setMyCmt(txt)}></TextInput>
                                <TouchableOpacity
                                    style={{ alignSelf: "center", }}
                                    onPress={() => {
                                        ratingACourse(token, courseId, myrating, mycmt)
                                            .catch(err => console.log("RATING ERR:", err))
                                        const tempRatingList = [...ratingList];
                                        tempRatingList.unshift({
                                            content: mycmt,
                                            user: {
                                                avartar: myavatar,

                                                name: myname
                                            }
                                        })
                                        // console.log(tempRatingList);
                                        setRatingList(tempRatingList);
                                    }}
                                >
                                    <Text style={{ color: "blue", alignSelf: "center" }}>{language.coursedetail.rate.cmt}</Text>
                                </TouchableOpacity>
                            </View>
                            <View>{renderRatingList(ratingList)}</View>

                        </ScrollView >
                    )
                }
            }
        </ThemeContext.Consumer>
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

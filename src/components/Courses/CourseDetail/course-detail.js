import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import CourseDetailItem from "./CourseDetailItem/course-detail-item";

const CourseDetail = (props) => {
    const item = props.route.params;

    const itemData = [
        {
            id: 1,
            title: 'Course Overview',
            length: '2:04',
            ele: [
                {
                    name: 'Course Overview',
                    len: '2:04',
                },
                {
                    name: 'Course Overview (cont.)',
                    len: '2:04',
                },
                {
                    name: 'Beginner',
                    len: '2:04',
                },
                {
                    name: 'Intermediate',
                    len: '2:04',
                },
                {
                    name: 'Intermediate (part2)',
                    len: '2:04',
                }
            ]
        },
        {
            id: 2,
            title: 'Course Level',
            length: '17:23',
            ele: [
                {
                    name: 'Course Overview',
                    len: '2:04',
                },
                {
                    name: 'Course Overview (cont.)',
                    len: '2:04',
                },
                {
                    name: 'Beginner',
                    len: '2:04',
                },
                {
                    name: 'Intermediate',
                    len: '2:04',
                },
                {
                    name: 'Intermediate (part2)',
                    len: '2:04',
                }
            ]
        },
        {
            id: 3,
            title: 'End courses',
            length: '23:11',
            ele: [
                {
                    name: 'end',
                    len: '2:04',
                },
                {
                    name: 'End(2)',
                    len: '2:04',
                },
            ]
        }
    ];

    const renderCourseDetailItem = (items) => {
        return (
            items.map(item => <CourseDetailItem item={item} />)
        );
    };

    return (
        <ScrollView style={styles.home}>
            <View style={styles.v}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
            <View style={styles.viewAuthor}>
                <Image source={require('../../../../assets/ic_people_author.png')} style={styles.image} />
                <Text style={styles.textAuthor}>{item.author}</Text>
            </View>
            <Text style={styles.textInfor}>{item.level} . {item.released} . {item.duration}</Text>
            <Text style={styles.textContent}>This course is free for you. Let's enjoy it. Good luck for you!</Text>
            <TouchableOpacity style={styles.button}
                onPress={() => alert('clicked !')}
            >
                <Text style={styles.textSignIn}>Take a learning check</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => alert('clicked !')}
            >
                <Text style={styles.textSignIn}>View related paths & courses</Text>
            </TouchableOpacity>
            <Text style={styles.textClone}>CONTENT</Text>
            <View>{renderCourseDetailItem(itemData)}</View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: 'black',
    },

    text: {
        color: 'white',
        margin: 20,
        fontWeight: 'bold',
        fontSize: 23,
        alignSelf: 'center',
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

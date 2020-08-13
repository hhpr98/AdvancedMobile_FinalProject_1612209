import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import StarRating from 'react-native-star-rating';

const SectionCoursesItem = (props) => {

    const point = Math.round(Number(props.item.contentPoint));

    const getCourseString = (item) => {
        return point + 'point . ' + item.createdAt.substring(0, 10) + ' . ' + item.totalHours + 'h';
    };

    const getImageURL = (item) => {
        return item.imageUrl;
    };

    return (
        <View style={styles.item}>
            {/* <Image source={require('../../../../../assets/icons8_java.png')} style={styles.image}/> */}
            <Image
                source={{ uri: getImageURL(props.item) }}
                style={styles.image}
            />
            <View style={{ margin: 5, }}>
                <Text style={styles.text1}>{props.item.title}</Text>
                <Text style={styles.text2}>{props.item["instructor.user.name"]}</Text>
                <Text style={styles.text2}>{getCourseString(props.item)}</Text>
                <StarRating
                    style={{width: 200, backgroundColor: "red"}}
                    disabled={false}
                    maxStars={5}
                    rating={point > 5 ? 5 : point}
                    fullStarColor="yellow"
                    emptyStarColor="white"
                    starSize={20}
                    containerStyle={{width:120}}
                    // starStyle={{marginRight:-7}}
                // selectedStar={(rating) => this.onStarRatingPress(rating)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        margin: 5,
        width: 240,
        height: 220,
        backgroundColor: '#333333'
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
    },
    text2: {
        fontSize: 12,
        color: 'white',
    },
    image: {
        width: 240,
        height: 100,
        resizeMode: 'stretch',
    }
});

export default SectionCoursesItem;

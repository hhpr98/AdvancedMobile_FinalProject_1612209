import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ThemeContext } from "../../../../.././../App";
import StarRating from 'react-native-star-rating';

const PathListItem = (props) => {

    const item = props.item;
    const point = Math.round(Number(item.contentPoint));

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, language }) => {
                    const getCourseString = () => {
                        return point + ' ' + language.searchscreen.coursecourse.point + ' . ' + item.totalHours + ' ' + language.searchscreen.coursecourse.hours + '  .  ' + item.price + ' (VNĐ)';
                    };

                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background, borderBottomColor: theme.foreground }}>
                            <Image
                                source={{ uri: item.imageUrl }}
                                style={styles.image}
                            />
                            <View style={{ margin: 5, marginRight: 30, }}>
                                <Text style={{ ...styles.text1, color: theme.foreground }}>{item.courseTitle}</Text>
                                <Text style={{ ...styles.text2, color: theme.foreground }} > {item.name}</Text>
                                <Text style={{ ...styles.text2, color: theme.foreground }} > {getCourseString()}</Text>
                                <StarRating
                                    style={{ width: 200, backgroundColor: "red" }}
                                    disabled={false}
                                    maxStars={5}
                                    rating={point > 5 ? 5 : point}
                                    fullStarColor="yellow"
                                    emptyStarColor="white"
                                    starSize={20}
                                    containerStyle={{ width: 120 }}
                                // starStyle={{marginRight:-7}}
                                // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                />
                            </View>
                        </View>
                    );
                }
            }
        </ThemeContext.Consumer >
    )
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        //backgroundColor: 'black',
        flexDirection: 'row',
        marginTop: 20,
        //borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    image: {
        width: 150,
        height: 100,
        marginBottom: 10,
    },
    text1: {
        //color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    text2: {
        //color: 'white',
        fontSize: 14,
    },
    textButton: {
        margin: 20,
        color: '#3399FF',
        fontWeight: 'bold',
        fontSize: 17,
    },
});

export default PathListItem;

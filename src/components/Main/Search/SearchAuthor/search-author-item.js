import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ThemeContext } from "../../../../../App";

const SearchAuthorItem = (props) => {

    const item = props.item;
    const point = Math.round(Number(item.contentPoint));

    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => {
                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background, borderBottomColor: theme.foreground }}>
                            <Image
                                source={{ uri: item.avatar }}
                                style={styles.image}
                            />
                            <View style={{ margin: 5, marginRight: 30, }}>
                                <Text style={{ ...styles.text1, color: theme.foreground }}>{item.name}</Text>
                                <Text style={{ ...styles.text2, color: theme.foreground }} > {item.numcourses} courses</Text>
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

export default SearchAuthorItem;

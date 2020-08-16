import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { ThemeContext } from "../../../../../App";
// import { DataContext } from "../../../../Provider/DataProvider";
import { getAllInstructor } from "../action";

const TopAuthor = () => {

    const [loading, setLoading] = useState(true);
    const [dataAuthor, setDataAuthor] = useState([]);

    useEffect(() => {
        setLoading(true);
        getAllInstructor()
            .then(res => res.json())
            .then(res => res.message === "OK" ? setDataAuthor(res.payload) : setDataAuthor([]))
            .catch(err => console.log("GET AUTHOR ERR:", err))
            .finally(() => setLoading(false))
    }, []);

    const getAuthorList = (authors) => {
        return (
            <ThemeContext.Consumer>
                {
                    ({ theme }) => {
                        return authors.map(item =>
                            <View>
                                <Image style={{ ...styles.image, backgroundColor: theme.foreground }} source={{ uri: item["user.avatar"] }} />
                                <Text style={{ ...styles.textAuthor, color: theme.foreground }}>{item["user.name"]}</Text>
                            </View>
                        )
                    }
                }
            </ThemeContext.Consumer>
        )
    };

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, language }) => {
                    return (
                        <View>
                            <View style={styles.view}>
                                <Text style={{ ...styles.textTitle, color: theme.foreground }}>{language.browsescreen.topauthor}</Text>
                                <ScrollView horizontal={true}>
                                    {loading && <ActivityIndicator size="large" color="blue" />}
                                    {getAuthorList(dataAuthor)}
                                </ScrollView>
                            </View>
                        </View>
                    );
                }
            }
        </ThemeContext.Consumer>
    )

};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'column',
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        //color: 'white',
        marginLeft: 10,
    },
    textButton: {
        fontSize: 12,
        //color: 'white',
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 120,
        //backgroundColor: 'white',
        margin: 10,
    },
    textAuthor: {
        fontSize: 12,
        //color: 'white',
        marginTop: 10,
        marginBottom: 20,
        width: 100,
        alignSelf: 'center',
        textAlign: 'center'
    }
});

export default TopAuthor;

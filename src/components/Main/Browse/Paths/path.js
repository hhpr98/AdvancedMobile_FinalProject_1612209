import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import PathItem from "./PathItem/path-item";
import { ThemeContext } from "../../../../Provider/ThemeProvider";
// import { DataContext } from "../../../../Provider/DataProvider";
import { getAllCategory } from "../action";

const Path = (props) => {

    const [loading, setLoading] = useState(false);
    const [dataCategory, setDataCategory] = useState([]);

    useEffect(() => {
        setLoading(true);
        getAllCategory()
            .then(res => res.json())
            .then(res => res.message === "OK" ? setDataCategory(res.payload) : setDataCategory([]))
            .catch(err => console.log("GET ALL CATEGORY ERR:", err))
            .finally(() => setLoading(false))
    }, []);

    const getPathItem = (paths) => {
        return paths.map(item =>
            <TouchableOpacity onPress={() => props.navigation.navigate("PathList", { pathId: item.id, pathTitle: item.name })}>
                <PathItem item={item} />
            </TouchableOpacity>
        )
    };

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, language }) => {
                    return (
                        <View>
                            <View style={styles.view}>
                                <Text style={{ ...styles.textTitle, color: theme.foreground }}>{language.browsescreen.path}</Text>
                            </View>
                            <ScrollView horizontal={true}>
                                {loading && <ActivityIndicator size="large" color="blue" />}
                                {getPathItem(dataCategory)}
                            </ScrollView>
                        </View>
                    );
                }
            }
        </ThemeContext.Consumer>
    )
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        // marginLeft: 10,
        justifyContent: 'space-between',
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        //color: 'white',
        marginLeft: 10,
    },
});

export default Path;

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import PathItem from "./PathItem/path-item";
import { ThemeContext } from "../../../../../App";
import { DataContext } from "../../../../Provider/DataProvider";

const Path = (props) => {

    const getPathItem = (paths) => {
        return paths.map(item =>
            <TouchableOpacity onPress={() => alert(item.name)}>
                <PathItem item={item} />
            </TouchableOpacity>
        )
    };

    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => {
                    return (
                        <DataContext.Consumer>
                            {
                                ({ data }) => {
                                    return (
                                        <View>
                                            <View style={styles.view}>
                                                <Text style={{ ...styles.textTitle, color: theme.foreground }}>Path</Text>
                                                <TouchableOpacity onPress={() => alert('See all clicked!')}>
                                                    <Text style={{ ...styles.textButton, color: theme.foreground }}>See all ></Text>
                                                </TouchableOpacity>
                                            </View>
                                            <ScrollView horizontal={true}>
                                                {getPathItem(data.paths)}
                                            </ScrollView>
                                        </View>
                                    );
                                }
                            }
                        </DataContext.Consumer>
                    )

                }
            }
        </ThemeContext.Consumer>
    )
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'space-between',
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
    }
});

export default Path;

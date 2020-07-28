import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import PathItem from "./PathItem/path-item";

const Path = (props) => {
    const data = [
        {
            name: 'Security in Google Cloud',
            number: '3 courses',
        },
        {
            name: 'Cisco DCCOR (350-601) for CCNP Data Center',
            number: '7 courses',
        },
        {
            name: 'ng-conf : Hardwired 2020',
            number: '31 courses',
        },
        {
            name: 'Managing Source Code with Git',
            number: '7 courses',
        },
        {
            name: 'Core Python',
            number: '8 courses',
        }
    ];

    const getPathItem = (paths) => {
        return paths.map(item =>
            <TouchableOpacity onPress={() => alert('path clicked!')}>
                <PathItem item={item} />
            </TouchableOpacity>
        )
    };

    return (
        <View>
            <View style={styles.view}>
                <Text style={styles.textTitle}>Path</Text>
                <TouchableOpacity onPress={() => alert('See all clicked!')}>
                    <Text style={styles.textButton}>See all ></Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
                {getPathItem(data)}
            </ScrollView>
        </View>

    );
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
        color: 'white',
        marginLeft: 10,
    },
    textButton: {
        fontSize: 12,
        color: 'white',
        marginRight: 10,
    }
});

export default Path;

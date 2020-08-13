import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const CourseDetailItem = (props) => {

    // get phần (part)
    const section = props.item;

    const renderMiniItem = (val) => {
        return val.map(item =>
            //console.log(item)
            <TouchableOpacity 
            style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}
            onPress={()=> alert("URL: " + item.videoUrl)}
            >
                <Text style={{ color: 'white',width: 250, }}>{item.name}</Text>
                <Text style={{ color: 'white', textAlignVertical:"center" }}>{item.hours} hours</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <View style={styles.main}>
                <Text style={styles.textID}>1</Text>
                <View>
                    <Text style={styles.text1}>{section.name}</Text>
                    <Text style={styles.text2}>... hours</Text>
                </View>
            </View>
            <View>{renderMiniItem(section.lesson)}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        marginTop: 20,
    },
    textID: {
        color: 'white',
        backgroundColor: '#333333',
        width: 50,
        height: 50,
        borderBottomWidth: 3,
        borderBottomColor: 'green',
        marginLeft: 20,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    text1: {
        color: 'white',
        fontSize: 17,
        marginLeft: 20,
    },
    text2: {
        color: 'white',
        fontSize: 13,
        marginLeft: 20,
    },
});

export default CourseDetailItem;

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const CourseDetailItem = (props) => {
    const renderMiniItem = (val) => {
        return val.map(item =>
            //console.log(item)
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <Text style={{color: 'white'}}>{item.name}</Text>
                <Text style={{color: 'white'}}>{item.len}</Text>
            </View>
        );
    };

    return (
        <View>
            <View style={styles.main}>
                <Text style={styles.textID}>{props.item.id}</Text>
                <View>
                    <Text style={styles.text1}>{props.item.title}</Text>
                    <Text style={styles.text2}>{props.item.length}</Text>
                </View>
            </View>
            <View>{renderMiniItem(props.item.ele)}</View>
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

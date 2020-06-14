import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Favorite = () => {



    return (
        <View style={styles.home}>
            <View style={{flexDirection:'row',justifyContent: 'space-around',}}>
                <Text style={styles.text1}>3 courses (440MB)</Text>
                <TouchableOpacity
                    onPress={()=>alert('remove!')}
                >
                    <Text style={styles.textButton}>Remove all</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    home: {
        flex:1,
        backgroundColor: 'black',
        //flexDirection:'column',
        //display:'flex',
        //justifyContent:'center',
        //alignItems:'center',
    },
    image: {
        width: 200,
        height: 100
    },
    text1: {
        margin: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    textButton: {
        margin: 20,
        color: '#3399FF',
        fontWeight: 'bold',
        fontSize: 17,
    },
});

export default Favorite;

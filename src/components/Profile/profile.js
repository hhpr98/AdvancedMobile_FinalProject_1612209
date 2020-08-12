import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ThemeContext } from "../../../App";

const Profile = () => {
    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => {
                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                            <View style={styles.head}>
                                <Image source={require('../../../assets/ic_people_author.png')} style={{ ...styles.image, backgroundColor: theme.foreground }} />
                                <Text style={{ ...styles.textHead, color: theme.foreground }}>Nguyễn Hữu Hòa</Text>
                            </View>
                            <Text style={{ ...styles.text1, color: theme.foreground }}>Activity insights (last 30 days)</Text>
                            <Text style={{ ...styles.text2, color: theme.foreground }}>TOTAL ACTIVE DAYS</Text>
                            <Text style={{ ...styles.text3, color: theme.foreground }}>0</Text>
                            <Text style={{ ...styles.text2, color: theme.foreground }}>MOST ACTIVE TIME OF DAYS</Text>
                            <Text style={{ ...styles.text3, color: theme.foreground }}>7:00 AM</Text>
                            <Text style={{ ...styles.text2, color: theme.foreground }}>MOST VIEWD SUBJECT</Text>
                            <Text style={{ ...styles.text3, color: theme.foreground }}>N/A</Text>
                        </View>
                    );
                }
            }
        </ThemeContext.Consumer>
    )
};

const styles = StyleSheet.create({
    home: {
        flexDirection: 'column',
        flex: 1,
        //backgroundColor: 'black'
    },
    head: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: -10,
    },
    textHead: {
        //color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    text1: {
        //color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    text2: {
        //color: 'white',
        fontSize: 13,
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    text3: {
        //color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        //backgroundColor: '#333333'
    }
});

export default Profile;

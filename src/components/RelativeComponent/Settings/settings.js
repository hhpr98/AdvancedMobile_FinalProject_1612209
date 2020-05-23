import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

const Setting = (props) => {
    return (
        <ScrollView style={styles.home}>
            <TouchableOpacity style={styles.head} onPress={()=>props.navigation.navigate('Profile')}>
                <Image
                    source={require('../../../../assets/ic_people_author.png')}
                    style={styles.image}
                />
                <Text style={styles.textHead}>Nguyễn Hữu Hòa</Text>
            </TouchableOpacity>
            <Text style={styles.textBig}>Account</Text>
            <Text style={styles.textBig}>Subcription</Text>
            <Text style={styles.textLittle}>My youtube channel</Text>
            <Text style={styles.textBig}>Comunicate Preferences</Text>
            <View style={styles.line}/>
            <Text style={styles.textBig}>Default caption language</Text>
            <Text style={styles.textLittle}>English</Text>
            <Text style={styles.textBig}>Require Wi-Fi for streaming</Text>
            <Text style={styles.textBig}>Require Wi-Fi for downloading</Text>
            <Text style={styles.textBig}>Recommended content push notifications</Text>
            <Text style={styles.textLittle}>Receive notifications about recommended contents.</Text>
            <Text style={styles.textBig}>Show quiz at the end of video</Text>
            <Text style={styles.textBig}>Download location</Text>
            <Text style={styles.textLittle}>Default location (30.5GB free of 64GB)</Text>
            <Text style={styles.textBig}>Default caption language</Text>
            <Text style={styles.textBig}>Caption</Text>
            <Text style={styles.textBig}>Notifications</Text>
            <Text style={styles.textBig}>Advanced Options</Text>
            <View style={styles.line}/>
            <Text style={styles.textBig}>App version</Text>
            <Text style={styles.textLittle}>0.1.3</Text>
            <View style={styles.line}/>

            <TouchableOpacity style={styles.buttonSignOut} onPress={()=>alert('Sign out clicked !')}>
                <Text style={styles.textSignOut}>SIGN OUT</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    home: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'black'
    },
    head: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginBottom: 20,
    },
    textHead: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 20,
    },
    textBig: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'flex-start',
        marginTop: 20,
        marginLeft: 30,
    },
    textLittle: {
        color: 'white',
        fontSize: 12,
        alignSelf: 'flex-start',
        marginLeft: 30,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#333333'
    },
    line: {
        color: 'white',
        borderBottomColor: '#333333',
        borderWidth: 0.5,
        height: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    buttonSignOut: {
        backgroundColor: 'black',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: '#3399FF',
        margin: 20,
        borderWidth: 3,
    },
    textSignOut: {
        color: '#3399FF',
        fontSize: 17,
        textAlign: 'center',
    },
});

export default Setting;

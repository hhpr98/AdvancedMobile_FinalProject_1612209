import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Home from "./src/components/Main/Home/home";
import Download from "./src/components/Main/Download/download";

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView style={styles.main}>
                <Download/>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    main: {
        flex:1,
        justifyContent: 'center',
    },
});


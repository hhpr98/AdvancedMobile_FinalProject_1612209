import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Home from "./src/components/Main/Home/home";

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView>
                <Home></Home>
            </SafeAreaView>
        </>
    );
}


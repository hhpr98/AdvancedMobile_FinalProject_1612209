import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function SplashScreen() {
    const [loading, setLoading] = useState(0);

    return (
        <View style={styles.container}>
            <Image source={require("../../../../assets/ic_app.png")} />
            <Text>Loading.....{loading}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    }
});
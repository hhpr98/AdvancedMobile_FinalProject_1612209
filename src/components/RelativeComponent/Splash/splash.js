import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import * as Progress from 'react-native-progress';

export default SplashScreen = (props) => {

    useEffect(() => {
        setTimeout(() => {
            // console.log("4s");
            props.navigation.navigate("Login");
        }, 4000);
    }, [])

    return (
        <View style={styles.container} >
            <Text style={{ alignSelf: "center", fontSize: 34, color: "red", fontWeight: "bold", marginBottom: 20, }}>APP LEARNING</Text>
            <Image source={require("../../../../assets/ic_app.png")} style={{ alignSelf: "center", marginBottom: 20, }} />
            <Progress.Bar style={{ alignSelf: "center" }} progress={0.9} width={200} indeterminate={true} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "white"
    }
});
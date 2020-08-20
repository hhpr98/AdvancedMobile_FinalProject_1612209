import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import { ThemeContext } from "../../../../Provider/ThemeProvider";
import storage from "../../../../Storage/storage";

const Greeting = (props) => {

    const [name, setName] = useState("");

    useEffect(() => {
        storage
            .load({ key: "jwt" })
            .then(ret => setName(ret.userInfo.name))
            .catch(err => console.log(err.name))
    }, [])


    return (
        <ThemeContext.Consumer>
            {
                ({ theme, language }) => {
                    return (
                        <ImageBackground style={styles.image} source={require('../../../../../assets/ic_browse_1.jpg')}>
                            <Text style={styles.title}>Hello {name} ! Welcome to Learning App!</Text>
                            <Text style={styles.content}>{language.greeting.content}</Text>
                        </ImageBackground>
                    )
                }
            }
        </ThemeContext.Consumer>

    );
};

const styles = StyleSheet.create({
    image: {
        height: 220,
        resizeMode: "cover",
        justifyContent: "center"
    },
    title: {
        margin: 10,
        color: 'white',
    },
    content: {
        margin: 10,
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    }
});

export default Greeting;

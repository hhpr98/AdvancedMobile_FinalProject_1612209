import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { ThemeContext } from "../../../Provider/ThemeProvider";
// import { DataContext } from "../../../Provider/DataProvider";
// import SearchBar from "react-native-elements";
import RadioForm from 'react-native-simple-radio-button';
import storage from "../../../Storage/storage";
import { searchWithKeyword } from "./action";
import SearchCourse from "./SearchCourse/search-course";
import SearchAuthor from "./SearchAuthor/search-author";

const Search = (props) => {
    const [text, setText] = useState("");
    const [type, setType] = useState(0);
    const [token, setToken] = useState("");
    const [courseData, setCourseData] = useState([]);
    const [instructorData, setInstructorData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        storage
            .load({ key: "jwt" })
            .then(ret => setToken(ret.token))
            .catch(err => console.log(err.name))
    }, []);

    const onSearchClick = () => {
        setLoading(true);
        searchWithKeyword(token, text)
            .then(res => res.json())
            .then(res => {
                if (res.message === "OK") {
                    setCourseData(res.payload.courses);
                    setInstructorData(res.payload.instructors);
                }
            })
            .catch(err => console.log("SEARCH WITH KEYWORD FAIL:", err))
            .finally(() => setLoading(false));
    }

    return (
        <ThemeContext>
            {
                ({ theme, language }) => {
                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                            <View style={{ backgroundColor: "lightblue", flexDirection: "row", justifyContent: "space-around" }}>
                                <TextInput
                                    style={{ ...styles.input, color: "black" }}
                                    onChangeText={text => setText(text)}
                                    placeholder={language.searchscreen.placeholder}
                                    placeholderTextColor="white"
                                    borderBottomColor="white"
                                />
                                <ImageBackground source={require("../../../../assets/ic_search.png")} style={{ width: 50, height: 50, alignSelf: "center" }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, }} onPress={() => onSearchClick()}>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                            <RadioForm
                                style={{ justifyContent: "space-around", backgroundColor: "lightblue", marginBottom: 20, }}
                                radio_props={[
                                    { label: language.searchscreen.label1, value: 0 },
                                    { label: language.searchscreen.label2, value: 1 },
                                    { label: language.searchscreen.label3, value: 2 }
                                ]}
                                initial={0}
                                formHorizontal={true}
                                labelHorizontal={false}
                                buttonColor={'#2196f3'}
                                labelColor={'red'}
                                animation={true}
                                onPress={(value) => setType(value)}
                            >
                            </RadioForm>
                            <ScrollView>
                                {loading && <ActivityIndicator size="large" color="yellow" />}
                                {type === 0 ?
                                    <>
                                        <SearchCourse navigation={props.navigation} courseSearchData={courseData} />
                                        <View style={{ marginTop: 20, }}></View>
                                        <SearchAuthor courseSearchAuthor={instructorData} />

                                    </> : <></>}
                                {type === 1 ?
                                    <>
                                        <SearchCourse navigation={props.navigation} courseSearchData={courseData} />
                                    </> : <></>}
                                {type === 2 ?
                                    <>
                                        <SearchAuthor courseSearchAuthor={instructorData} />
                                    </> : <></>}
                            </ScrollView>
                        </View>
                    );
                }
            }
        </ThemeContext>
    )
};

const styles = StyleSheet.create({
    home: {
        flexDirection: 'column',
        flex: 1,
        //backgroundColor: 'black'
    },
    input: {
        width: 300,
        height: 40,
        margin: 10,
        //color: 'white',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 3,
    }
});

export default Search;

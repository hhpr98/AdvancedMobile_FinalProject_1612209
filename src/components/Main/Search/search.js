import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { ThemeContext } from "../../../../App";
// import { DataContext } from "../../../Provider/DataProvider";
// import SearchBar from "react-native-elements";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import storage from "../../../Storage/storage";
import { searchWithKeyword } from "./action";
import SearchCourse from "./SearchCourse/search-course";

const Search = (props) => {
    const [text, setText] = useState("");
    const [type, setType] = useState(0);
    const [token, setToken] = useState("");
    const [courseData, setCourseData] = useState([]);
    const [instructorData, setInstructorData] = useState([]);

    useEffect(() => {
        storage
            .load({ key: "jwt" })
            .then(ret => setToken(ret.token))
            .catch(err => console.log(err.name))
    }, []);

    const onSearchClick = () => {
        searchWithKeyword(token, text)
            .then(res => res.json())
            .then(res => {
                if (res.message === "OK") {
                    setCourseData(res.payload.courses);
                    setInstructorData(res.payload.instructors);
                }
            })
            .catch(err => console.log("SEARCH WITH KEYWORD FAIL:", err))
    }

    return (
        <ThemeContext>
            {
                ({ theme }) => {
                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                            <View style={{ backgroundColor: theme.foreground, flexDirection: "row", justifyContent: "space-around" }}>
                                <TextInput
                                    style={{ ...styles.input, color: theme.background }}
                                    onChangeText={text => setText(text)}
                                    placeholder="Search..."
                                />
                                <ImageBackground source={require("../../../../assets/ic_search.png")} style={{ width: 50, height: 50, alignSelf: "center" }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, }} onPress={() => onSearchClick()}>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                            <RadioForm
                                style={{ justifyContent: "space-around", backgroundColor: "white" }}
                                radio_props={[
                                    { label: 'Tất cả', value: 0 },
                                    { label: 'Khóa học', value: 1 },
                                    { label: 'Tác giả', value: 2 }
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
                                {type === 0 ?
                                    <>
                                        <Text>Loại 0</Text>
                                        <SearchCourse />
                                    </> : <></>}
                                {type === 1 ?
                                    <>
                                        <Text>Loại 1</Text>
                                    </> : <></>}
                                {type === 2 ?
                                    <>
                                        <Text>Loại 2</Text>
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

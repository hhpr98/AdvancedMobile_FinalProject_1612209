import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import CourseLargeItem from "../Favorite/CourseFavorite/course-large-item";
import { ThemeContext } from "../../../../App";
// import { DataContext } from "../../../Provider/DataProvider";
// import SearchBar from "react-native-elements";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const Search = (props) => {
    const [text, setText] = useState("");
    const [type, setType] = useState(0);
    const [isNoData, setIsNoData] = useState(true);

    const renderListItems = (courses) => {
        return courses.map(item =>
            <TouchableOpacity
            //onPress={()=>props.navigation.navigate('CourseDetail',item)}
            >
                <CourseLargeItem item={item} />
            </TouchableOpacity>
        );
    };

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
                                    <TouchableOpacity style={{ width: 50, height: 50, }} onPress={() => alert("search clicked!")}>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                            <RadioForm
                                style={{ marginTop: 5, justifyContent: "space-around", backgroundColor: "white" }}
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
                                {
                                    isNoData ?
                                        <>
                                            <Text style={{ color: "red" }}>NO DATA</Text>
                                        </> :
                                        <>
                                            {type === 0 ?
                                                <>
                                                    <Text>Loại 0</Text>
                                                </> : <></>}
                                            {type === 1 ?
                                                <>
                                                    <Text>Loại 1</Text>
                                                </> : <></>}
                                            {type === 2 ?
                                                <>
                                                    <Text>Loại 2</Text>
                                                </> : <></>}
                                        </>
                                }



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

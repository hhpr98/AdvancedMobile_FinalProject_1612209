import React from "react";
import { Modal, View, TouchableOpacity, StyleSheet, Text, ImageBackground } from "react-native";
import { deleteAnSearchHistory } from "../action";

const SearchHistory = (props) => {

    const { setText, dataHistory, setDataHistory } = props;
    const size = dataHistory.length || 0;

    const renderSearchHistoryItem = () => {
        return dataHistory.map(item =>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: 250, height: 40, marginLeft: 70 }}>
                <TouchableOpacity
                    onPress={() => setText(item.content)}
                    style={{ width: 250, height: 40, }}
                >
                    <Text style={{ color: "red", fontSize: 17 }}>{item.content}</Text>
                </TouchableOpacity>
                <ImageBackground
                    source={require("../../../../../assets/ic_search_remove.png")}
                    style={{ width: 30, height: 30 }}
                >
                    <TouchableOpacity
                        onPress={() => console.log("ABC")}
                        style={{ width: 30, height: 30 }}
                    >
                    </TouchableOpacity>
                </ImageBackground>
            </View >
        )
    }

    return (
        <View style={{backgroundColor: "lightblue"}}>
            {
                size === 0 ?
                    <></> :
                    <>
                        {renderSearchHistoryItem()}
                    </>
            }
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchHistory;

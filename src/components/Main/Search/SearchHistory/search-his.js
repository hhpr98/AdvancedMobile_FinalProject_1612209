import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground } from "react-native";
import { deleteAnSearchHistory } from "../action";

const SearchHistory = (props) => {

    const { setText, dataHistory, setDataHistory, token } = props;
    const size = dataHistory.length || 0;

    const onDeleteSearchHistory = (id) => {
        deleteAnSearchHistory(token, id)
            .then(res => res.json())
            .then(res => {
                if (res.message === "OK") {
                    const tempArr = dataHistory.filter(ele => ele.id !== id);
                    setDataHistory(tempArr);
                } else {
                    console.log("Delete history search " + id + " errrrrr");
                    alert(res.message);
                }
            })
            .catch(err => console.log("DELETE HISTORY SEARCH API FAILLL", err))
    }

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
                        onPress={() => onDeleteSearchHistory(item.id)}
                        style={{ width: 30, height: 30 }}
                    >
                    </TouchableOpacity>
                </ImageBackground>
            </View >
        )
    }

    return (
        <View style={{ backgroundColor: "lightblue" }}>
            {
                size === 0 ?
                    <>
                        <Text style={{ textAlign: "center", marginBottom: 20, }}>No history search</Text>
                    </> :
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

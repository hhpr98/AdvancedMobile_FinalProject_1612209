import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeContext } from "../../../../../App";
import SearchAuthorItem from "../SearchAuthor/search-author-item";

const SearchAuthor = (props) => {

    const data = props.courseSearchAuthor.data;
    const totalInPage = props.courseSearchAuthor.totalInPage;
    const total = props.courseSearchAuthor.total;

    const size = props.courseSearchAuthor.length === 0 ? 0 : data.length;
    // giải thích cái size cho chính mình sau này :v
    // lúc chưa load đc, thì props.courseSearchData.length = 0 (tức chưa có dòng nào tên là data (props.courseSearchData.data)
    // nên lấy size của nó báo lỗi đỏ

    const renderAuthor = () => {
        return data.map(item =>
            <View>
                <SearchAuthorItem item={item} />
            </View>
        );
    }

    return (
        <ThemeContext>
            {
                ({ theme }) => {
                    return (
                        <View style={{ ...styles.home, backgroundColor: theme.background }}>
                            <View style={{ width: 400, height: 50, marginLeft: 10, borderBottomColor: "#3399FF", borderBottomWidth: 2, }}>
                                <Text style={{ color: "white", width: 100, height: 30, margin: 10, fontWeight: "bold", backgroundColor: "#3399FF", fontSize: 17, textAlign: "center" }}>Author</Text>
                            </View>
                            {
                                size === 0 ?
                                    <>
                                        <Image style={{ width: 100, height: 100, alignSelf: "center", marginTop: 10, }} source={require("../../../../../assets/ic_search_nodata.png")} />
                                        <Text style={{ color: theme.foreground, alignSelf: "center", marginTop: 10, }}>NODATA</Text>

                                    </> :
                                    <>
                                        {renderAuthor()}
                                    </>
                            }
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
});

export default SearchAuthor;
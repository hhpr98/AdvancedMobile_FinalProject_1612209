// import React from "react";
// import { Modal, View, TouchableHighlight, StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native";
// import { deleteAnSearchHistory } from "../action";

// const SearchHistory = (props) => {

//     const { modalVisible, setModalVisible, setText, dataHistory, setDataHistory } = props;

//     const renderSearchHistoryItem = (items) => {
//         return items.map(item => {
//             <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "red", width: 400, height: 40 }}>
//                 <TouchableHighlight
//                     onPress={() => setText(item.content)}
//                     style={{ width: 300, height: 40 }}
//                 >
//                     <Text style={{ color: "blue" }}>{item.content}a</Text>
//                 </TouchableHighlight>
//                 <TouchableHighlight
//                     onPress={() => alert("xóa")}
//                     style={{ width: 40, height: 40 }}
//                 >
//                     <Text style={{ color: "#3399FF" }}>delete</Text>
//                 </TouchableHighlight>
//             </View>
//         })
//     }

//     return (
//         <View>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     // alert.alert("Modal has been closed.");
//                 }}
//             >
//                 <View style={styles.centeredView}>
//                     <View style={styles.modalView}>
//                         <Text style={styles.modalText}>History search</Text>
//                         <ScrollView>
//                             {renderSearchHistoryItem(dataHistory)}
//                         </ScrollView>
//                         <TouchableHighlight
//                             style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
//                             onPress={() => {
//                                 setModalVisible(!modalVisible);
//                             }}
//                         >
//                             <Text style={styles.textStyle}>Close</Text>
//                         </TouchableHighlight>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     // modal style
//     centeredView: {
//         flex: 1,
//         // justifyContent: "center",
//         alignItems: "center",
//         marginTop: 90
//     },
//     modalView: {
//         margin: 20,
//         backgroundColor: "white",
//         borderRadius: 20,
//         padding: 35,
//         alignItems: "center",
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         width: 400,
//         height: 600,
//     },
//     openButton: {
//         backgroundColor: "#F194FF",
//         borderRadius: 20,
//         padding: 10,
//         elevation: 2
//     },
//     textStyle: {
//         color: "white",
//         fontWeight: "bold",
//         textAlign: "center"
//     },
//     modalText: {
//         marginBottom: 15,
//         textAlign: "center",
//         fontWeight: "bold"
//     }
// });

// export default SearchHistory;

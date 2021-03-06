import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, ActivityIndicator, ImageBackground, TextInput } from 'react-native';
import { ThemeContext } from "../../Provider/ThemeProvider";
import storage from "../../Storage/storage";
import { getInformation, updateInformation } from "./action";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { changePassword } from "../Authen/action";

const Profile = () => {

    const [loading, setLoading] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("NaN");
    const [point, setPoint] = useState(0);
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");

    const [txtName, setTxtName] = useState("");
    const [txtAvatar, setTxtAvatar] = useState("");
    const [txtPhone, setTxtPhone] = useState("");

    const [currentpassword, setCurrentPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [renewpassword, setRenewPassword] = useState("");

    useEffect(() => {
        storage
            .load({ key: "jwt" })
            .then(ret => {
                setEmail(ret.userInfo.email);
                setToken(ret.token);
                setUserId(ret.userInfo.id);
                const tk = ret.token;
                LoadData(tk);

            })
            .catch(err => console.log(err.name))
    }, [])

    const LoadData = (tk) => {
        setLoading(true);
        getInformation(tk)
            .then(res => res.json())
            .then(res => {
                if (res.message === "OK") {

                    setAvatar(res.payload.avatar);
                    setName(res.payload.name);
                    setPhone(res.payload.phone);
                    setPoint(res.payload.point);
                }
            })
            .catch(err => console.log("GET INFORMATION ERR", err))
            .finally(() => setLoading(false))
    }

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, language }) => {
                    return (
                        <ScrollView style={{ ...styles.home, backgroundColor: theme.background }}>
                            {loading && <ActivityIndicator size="large" color="blue" />}
                            <View style={styles.head}>
                                <Image source={{ uri: avatar }} style={{ ...styles.image, backgroundColor: theme.foreground }} />
                                <Text style={{ ...styles.textHead, color: theme.foreground }}>{name}</Text>
                            </View>
                            <Text style={{ ...styles.text1, color: "red", marginTop: 50, }}>{language.profilescreen.basic}</Text>
                            <Text style={{ ...styles.text2, color: theme.foreground }}>EMAIL</Text>
                            <Text style={{ ...styles.text3, color: theme.foreground }}>{email}</Text>
                            <Text style={{ ...styles.text2, color: theme.foreground }}>{language.profilescreen.phone}</Text>
                            <Text style={{ ...styles.text3, color: theme.foreground }}>{phone}</Text>
                            <Text style={{ ...styles.text2, color: theme.foreground }}>POINTS</Text>
                            <Text style={{ ...styles.text3, color: theme.foreground }}>{point}</Text>

                            <ImageBackground source={require("../../../assets/ic_profile_down.png")} style={{ width: 50, height: 50, alignSelf: "center" }}>
                                <TouchableOpacity
                                    style={{ width: 50, height: 50 }}
                                    onPress={() => {
                                        if (isUpdate === false) {
                                            setTxtName(name);
                                            setTxtAvatar(avatar);
                                            setTxtPhone(phone);
                                        } else {
                                            setTxtName("");
                                            setTxtAvatar("");
                                            setTxtPhone("");
                                        }
                                        setIsUpdate(!isUpdate);
                                    }}
                                >
                                </TouchableOpacity>
                            </ImageBackground>

                            {
                                isUpdate ?
                                    <>
                                        <Text style={{ ...styles.text1, color: "red", marginTop: 50, }}>{language.profilescreen.update}</Text>
                                        <View style={{ ...styles.viewInsert2, backgroundColor: theme.background }} />
                                        <View style={{ backgroundColor: theme.background, borderRadius: theme.boderRadiusLogin }}>
                                            <Text style={styles.text}>{language.profilescreen.fullname}</Text>
                                            <TextInput
                                                style={{ ...styles.input, color: theme.foreground }}
                                                onChangeText={user => setTxtName(user)}
                                                defaultValue={txtName}
                                            />
                                        </View>
                                        <View style={{ backgroundColor: theme.background, borderRadius: theme.boderRadiusLogin }}>
                                            <Text style={styles.text}>{language.profilescreen.urlava}</Text>
                                            <TextInput
                                                style={{ ...styles.input, color: theme.foreground }}
                                                onChangeText={user => setTxtAvatar(user)}
                                                defaultValue={txtAvatar}
                                            />
                                        </View>
                                        <View style={{ backgroundColor: theme.background, borderRadius: theme.boderRadiusLogin }}>
                                            <Text style={styles.text}>{language.profilescreen.phonenumber}</Text>
                                            <TextInput
                                                style={{ ...styles.input, color: theme.foreground }}
                                                onChangeText={user => setTxtPhone(user)}
                                                defaultValue={txtPhone}
                                            />
                                        </View>
                                        <View style={{ ...styles.viewInsert2, backgroundColor: theme.background }} />
                                        <ImageBackground source={require("../../../assets/ic_profile_update.png")} style={{ width: 50, height: 50, alignSelf: "center" }}>
                                            <TouchableOpacity
                                                style={{ width: 50, height: 50 }}
                                                onPress={() => {
                                                    updateInformation(token, txtName, txtAvatar, txtPhone)
                                                        .then(res => res.json())
                                                        .then(res => {
                                                            if (res.message === "OK") {
                                                                alert("Cập nhật thành công!");
                                                                setIsUpdate(false);
                                                                setTxtAvatar("");
                                                                setTxtName("");
                                                                setPhone("");
                                                                LoadData(token);
                                                            }
                                                            else {
                                                                alert(res.message);
                                                            }
                                                        })

                                                }
                                                }>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                        <View style={{ ...styles.viewInsert2, backgroundColor: theme.background }} />

                                        <Text style={{ ...styles.text1, color: "red", marginTop: 50, }}>{language.profilescreen.update2}</Text>
                                        <View style={{ ...styles.viewInsert2, backgroundColor: theme.background }} />
                                        <View style={{ backgroundColor: theme.background, borderRadius: theme.boderRadiusLogin }}>
                                            <Text style={styles.text}>{language.profilescreen.currentpassword}</Text>
                                            <TextInput
                                                style={{ ...styles.input, color: theme.foreground }}
                                                onChangeText={user => setCurrentPassword(user)}
                                                secureTextEntry={true}
                                            />
                                        </View>
                                        <View style={{ backgroundColor: theme.background, borderRadius: theme.boderRadiusLogin }}>
                                            <Text style={styles.text}>{language.profilescreen.newpassword}</Text>
                                            <TextInput
                                                style={{ ...styles.input, color: theme.foreground }}
                                                onChangeText={user => setNewPassword(user)}
                                                secureTextEntry={true}
                                            />
                                        </View>
                                        <View style={{ backgroundColor: theme.background, borderRadius: theme.boderRadiusLogin }}>
                                            <Text style={styles.text}>{language.profilescreen.renewpassword}</Text>
                                            <TextInput
                                                style={{ ...styles.input, color: theme.foreground }}
                                                secureTextEntry={true}
                                                onChangeText={user => setRenewPassword(user)}
                                            />
                                        </View>
                                        <View style={{ ...styles.viewInsert2, backgroundColor: theme.background }} />
                                        <ImageBackground source={require("../../../assets/ic_profile_update.png")} style={{ width: 50, height: 50, alignSelf: "center" }}>
                                            <TouchableOpacity
                                                style={{ width: 50, height: 50 }}
                                                onPress={() => {
                                                    if (newpassword !== renewpassword) {
                                                        alert("Mật khẩu nhập lại phải trùng với mật khẩu mới");
                                                    } else {
                                                        changePassword(token, userId, currentpassword, newpassword)
                                                            .then(res => res.json())
                                                            .then(res => {
                                                                if (res.message === "Mật khẩu đã được đổi") {
                                                                    setIsUpdate(false);
                                                                    setTxtAvatar("");
                                                                    setTxtName("");
                                                                    setPhone("");
                                                                }
                                                                alert(res.message);
                                                            })
                                                            .catch(err => console.log("CHANGE PASSWORD ERR", err));
                                                    }
                                                }}>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                        <View style={{ ...styles.viewInsert2, backgroundColor: theme.background }} />
                                    </> :
                                    <>
                                    </>
                            }
                        </ScrollView>
                    );
                }
            }
        </ThemeContext.Consumer>
    )
};

const styles = StyleSheet.create({
    home: {
        flexDirection: 'column',
        flex: 1,
        //backgroundColor: 'black'
    },
    head: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: -10,
    },
    textHead: {
        //color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    text1: {
        //color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    text2: {
        //color: 'white',
        fontSize: 13,
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    text3: {
        //color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        //backgroundColor: '#333333'
    },

    // copy style from login screen
    viewInsert2: {
        //backgroundColor: 'black',
        height: 50,
    },
    text: {
        color: '#3399FF',
        marginLeft: 50,
    },
    input: {
        height: 30,
        margin: 10,
        //color: 'white',
        borderBottomColor: '#3399FF',
        borderBottomWidth: 2,
        fontSize: 21,
        width: 300,
        alignSelf: "center"
    },

});

export default Profile;

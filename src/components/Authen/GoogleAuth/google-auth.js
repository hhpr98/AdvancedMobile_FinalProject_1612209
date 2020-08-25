import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import * as Google from "expo-google-app-auth";
import storage from "../../../Storage/storage";
// https://docs.expo.io/versions/v38.0.0/sdk/google/


const GoogleAuth = (props) => {
    const [signedIn, setSignIn] = useState(false);

    const ANDROID_CLIENT_ID = "297482195046-atg02prarlpfel1efkak9cb8eqt7g5h9.apps.googleusercontent.com";

    const signIn = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
                scopes: ["profile", "email"]
            });
            if (result.type === "success") {
                setSignIn(true);
                // console.log(result.user);
                // console.log("Access", result.accessToken);
                // save on storage
                storage
                    .save({
                        key: "jwt",
                        data: {
                            userInfo: result.user,
                            token: result.accessToken,
                        },
                        expires: 3600 * 24 * 30
                    });
                // navigate
                props.navigation.navigate('TabBar');

            } else {
                console.log("cancelled")
            }

            /*
            // First- obtain access token from Expo's Google API
            const { type, accessToken, user } = await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
                scopes: ["profile", "email"]
            });

            if (type === 'success') {
                // Then you can use the Google REST API
                let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
                    headers: { Authorization: `Bearer ${accessToken}` },
                });
                console.log(userInfoResponse);
            }
            */

        } catch (e) {
            console.log("Get Google auth err", e)
        }
    }

    const signOut = async () => {
        try {
            const result = await Google.logOutAsync({
                androidClientId: ANDROID_CLIENT_ID
            });
        } catch (e) {
            console.log("Get Google auth err", e)
        }
        setSignIn(false);
    }

    return (
        <View>
            {
                signedIn ? (
                    <View>
                        <Text>You have login as Google.</Text>
                        <Button title="Sign out" onPress={() => signOut()} />
                    </View>
                ) : (
                        <View>
                            <Text style={{ color: "red", fontWeight: "bold", fontSize: 23, textAlign: "center", margin: 20, }}>Sign In With Google</Text>
                            <Button title="Sign in with Google" onPress={() => signIn()} />
                        </View>
                    )
            }
        </View>
    )
}

export default GoogleAuth;
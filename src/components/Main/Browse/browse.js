import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ImageButton from "./ImageButton/image-button";
import LittleImageButton from "./ImageButton/little-image-button";

const Browse = () => {
    const dat = [
        {
            d1: 'CONFERENCES',
            d2: '<SOFTWARE>\nDEVELOPMENT'
        },
        {
            d1: 'IT\nOPPS',
            d2: 'INFORMATION\nAND\nCYBER'
        },
        {
            d1: 'DATA\nPROFESSTION',
            d2: 'BUSINESS\nPROFESSTIONAL'
        },
        {
            d1: 'CREATIVE\nPROFESSTIONAL',
            d2: 'MANUFACTURING\nAND\nDESIGN'
        },
        {
            d1: 'ARCHITECTURE',
            d2: 'CERTIFICA'
        },
    ];

    const getLittleScrollView = (data) => {
        return data.map(item =>
            <View>
                <LittleImageButton title={item.d1}/>
                <LittleImageButton title={item.d2}/>
            </View>);
    };

    return (
        <ScrollView style={styles.browse}>
            <ImageButton title1='NEW' title2='RELEASES'/>
            <ImageButton title1='RECOMMENDED' title2='FOR YOU'/>
            <ScrollView horizontal={true} style={{marginBottom:20,}}>
                {getLittleScrollView(dat)}
            </ScrollView>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    browse: {
        flex:1,
        backgroundColor: 'black',
    },

});

export default Browse;

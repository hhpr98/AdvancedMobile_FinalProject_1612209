import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PopularSkillsItem from "./PopularSkillItem/popular-skill-item";
import { ThemeContext } from "../../../../../App";
import { DataContext } from "../../../../Provider/DataProvider";

const PopularSkills = () => {

    const getPopularSkillsItem = (dat) => {
        return dat.map(item => <PopularSkillsItem content={item} />)
    };

    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => {
                    return (
                        <DataContext.Consumer>
                            {
                                ({ data }) => {
                                    return (
                                        <View style={styles.view}>
                                            <Text style={{ ...styles.text, color: theme.foreground }}>Popular Skills</Text>
                                            <ScrollView horizontal={true}>
                                                {getPopularSkillsItem(data.popularskills)}
                                            </ScrollView>
                                        </View>
                                    );
                                }
                            }
                        </DataContext.Consumer>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
};

const styles = StyleSheet.create({
    view: {
        height: 100,
    },
    text: {
        //color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    }
});

export default PopularSkills;

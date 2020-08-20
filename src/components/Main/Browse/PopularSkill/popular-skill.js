import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PopularSkillsItem from "./PopularSkillItem/popular-skill-item";
import { ThemeContext } from "../../../../Provider/ThemeProvider";
import { DataContext } from "../../../../Provider/DataProvider";

const PopularSkills = () => {

    const getPopularSkillsItem = (dat) => {
        return dat.map(item => <PopularSkillsItem content={item} />)
    };

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, language }) => {
                    return (
                        <DataContext.Consumer>
                            {
                                ({ data }) => {
                                    return (
                                        <View style={styles.view}>
                                            <Text style={{ ...styles.text, color: theme.foreground }}>{language.browsescreen.popularskill}</Text>
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

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PopularSkillsItem from "./PopularSkillItem/popular-skill-item";

const PopularSkills = () => {
    const data = ['Angular', 'JavaScript', 'C#', 'Java', 'Data Analysis', 'ASP.NET', 'Node.js', 'Design Pattern', 'Python', 'React', '.NET', 'SQL Server', 'Database Administrantion', 'Part Modeling', 'Information Security', 'JS', 'ASP.NET Core', 'TypeScript', 'Machine Learning', 'Android', 'iOS'];

    const getPopularSkillsItem = (dat) => {
        return dat.map(item => <PopularSkillsItem content={item} />)
    };

    return (
        <View style={styles.view}>
            <Text style={styles.text}>Popular Skills</Text>
            <ScrollView horizontal={true}>
                {getPopularSkillsItem(data)}
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    view: {
        height: 100,
    },
    text: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    }
});

export default PopularSkills;

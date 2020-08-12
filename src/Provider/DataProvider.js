import React from "react";

export const DataContext = React.createContext();

const data = {
    paths: [
        {
            name: 'Security in Google Cloud',
            number: '3 courses',
        },
        {
            name: 'Cisco DCCOR (350-601) for CCNP Data Center',
            number: '7 courses',
        },
        {
            name: 'ng-conf : Hardwired 2020',
            number: '31 courses',
        },
        {
            name: 'Managing Source Code with Git',
            number: '7 courses',
        },
        {
            name: 'Core Python',
            number: '8 courses',
        }
    ],
    topauthors: ['Mr.An', 'Hong Thai', 'John', 'Sylas', 'Mary', 'Hao Pham', 'Truc Nguyen'],
    popularskills: ['Angular', 'JavaScript', 'C#', 'Java', 'Data Analysis', 'ASP.NET', 'Node.js', 'Design Pattern', 'Python', 'React', '.NET', 'SQL Server', 'Database Administrantion', 'Part Modeling', 'Information Security', 'JS', 'ASP.NET Core', 'TypeScript', 'Machine Learning', 'Android', 'iOS'],
}

export const DataProvider = (props) => {

    return (
        <DataContext.Provider value={{ data }}>
            {props.children}
        </DataContext.Provider>
    )
};
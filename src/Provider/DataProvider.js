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
}

export const DataProvider = (props) => {

    return (
        <DataContext.Provider value={{ data }}>
            {props.children}
        </DataContext.Provider>
    )
};
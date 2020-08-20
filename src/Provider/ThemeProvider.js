import React, { useState } from "react";
import { themes } from "../libs/themes"
import { languages } from "../libs/languages";

export const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.dark);
    const [language, setLanguage] = useState(languages.en);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage }}>
            {props.children}
        </ThemeContext.Provider>
    )
};
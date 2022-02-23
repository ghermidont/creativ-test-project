import React, {useContext, useEffect, useState} from "react";
const authContext = React.createContext();

export function useThemeContext(){
    return useContext(authContext);
}

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("Light");

    const handleDarkTheme =() => setTheme("Dark");
    const handleLightTheme =() => setTheme("Light");

    useEffect(() => theme==="Dark"?document.body.style.backgroundColor="#5D5C61":document.body.style.backgroundColor="white", [theme]);

    return (
        <authContext.Provider value={{ theme, handleDarkTheme, handleLightTheme }}>
            {children}
        </authContext.Provider>
    );
}
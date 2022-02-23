import React, { useContext, useState, useEffect } from "react";

export const themes = {
    dark: "",
    light: "white-content",
};

const authContext = React.createContext({
    theme: themes.dark,
    changeTheme: () => {},
});

export function useThemeContext(){
    return useContext(authContext);
}

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(themes.dark);

    function changeTheme(theme){
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
        case themes.light:
            document.body.classList.add("white-content");
            break;
        case themes.dark:
        default:
            document.body.classList.remove("white-content");
            break;
        }
    }, [theme]);

    return (
        <authContext.Provider value={{ theme, changeTheme }}>
            {children}
        </authContext.Provider>
    );
}
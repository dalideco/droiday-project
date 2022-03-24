import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


type Theme = "dark" | "light"

interface ContextData {
    theme: Theme,
    changeTheme: (theme: Theme) => void
}

const themeContext = createContext<ContextData>({
    theme: "light",
    changeTheme: () => { }
});

export const useTheme = () => {
    return useContext(themeContext)
}

export const ThemeProvider = ({ children }: { children: any }) => {

    const [theme, setTheme] = useState<Theme>("light")

    useEffect(() => {
        AsyncStorage.getItem('theme').then(value => {
            if (!value) return;
            setTheme(value as Theme)
        })
    }, [])

    const changeTheme = (theme: Theme) => {
        setTheme(theme);
        AsyncStorage.setItem('theme', theme)
    }

    const value: ContextData = {
        theme,
        changeTheme
    }

    return (
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
    )
}


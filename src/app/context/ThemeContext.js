import { useState , createContext } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState("dark")

    const toggle = () => {
        setMode(prev => {
            return prev === "dark" ? "light" : "dark";
        })
    }
    const value = {mode, toggle}
    return <div className={`theme-${mode}`}>
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    </div>
}
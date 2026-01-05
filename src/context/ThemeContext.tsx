import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Initialize theme from localStorage or default to dark
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
        return savedTheme || 'dark';
    });

    // Update localStorage and document class when theme changes
    useEffect(() => {
        localStorage.setItem('portfolio-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);

        // Add smooth transition class
        document.documentElement.classList.add('theme-transition');
        const timeout = setTimeout(() => {
            document.documentElement.classList.remove('theme-transition');
        }, 300);

        return () => clearTimeout(timeout);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

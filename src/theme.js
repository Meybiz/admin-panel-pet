import { createTheme } from "@mui/material";
import { createContext, useState, useMemo } from "react";

export const tokens = (mode) => ({
        ...(mode === 'dark' ? {
        blueAccent: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        blackAccent: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#434957",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509"
        },
        greenAccent: {
            100: "#dbf5ee",
            200: "#b7ebde",
            300: "#94e2cd",
            400: "#70d8bd",
            500: "#4cceac",
            600: "#3da58a",
            700: "#2e7c67",
            800: "#1e5245",
            900: "#0f2922"
        },
        redAccent: {
            100: "#f8d9d8",
            200: "#f1b2b0",
            300: "#e98c89",
            400: "#e26561",
            500: "#db3f3a",
            600: "#af322e",
            700: "#832623",
            800: "#581917",
            900: "#2c0d0c"
        },
    } : {
        blueAccent: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        blackAccent: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#434957",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509"
        },
        greenAccent: {
            100: "#dbf5ee",
            200: "#b7ebde",
            300: "#94e2cd",
            400: "#70d8bd",
            500: "#4cceac",
            600: "#3da58a",
            700: "#2e7c67",
            800: "#1e5245",
            900: "#0f2922"
        },
        redAccent: {
            100: "#f8d9d8",
            200: "#f1b2b0",
            300: "#e98c89",
            400: "#e26561",
            500: "#db3f3a",
            600: "#af322e",
            700: "#832623",
            800: "#581917",
            900: "#2c0d0c"
        },
    })
})


export const themes = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark' ? {
                primary: {
                    main: colors.primary[500]
                },
                secondary: {
                  main: colors.greenAccent[500]  
                },
                neutral: {
                    main: colors.grey[500],
                    dark: colors.grey[500],
                    light: colors.grey[500]
                },
                background: {
                    default: colors.primary[500],
                }
            }: {
                primary: {
                    main: colors.primary[100]
                },
                secondary: {
                  main: colors.greenAccent[500]  
                },
                neutral: {
                    main: colors.grey[700],
                    dark: colors.grey[500],
                    light: colors.grey[100]
                },
                background: {
                    default: '#fcfcfc',
                }
            })
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        }
    }
}


export const ColorContext = createContext({
    toogleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState('dark')
    const ColorMode = useMemo(() => ({
        toogleColorMode: () => setMode(prev => !prev)
    }), [])
    const theme = useMemo(() => createTheme(themes(mode)), [mode])
    return [theme, ColorMode]
}


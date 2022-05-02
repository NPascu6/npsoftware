import {createTheme} from "@mui/material";

const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#0052cc',
        },
        secondary: {
            main: '#152238',
        },
        background: {
            default: '#0052cc'
        }
    },
    loginButton: {
        background: '#0052cc',
        color: "#FFA500"
    },
    status: {
        danger: '#FFA500',
        success: '#50C878',
        fail: '#880808'
    },
});

export default mainTheme

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
            success: string;
            fail: string;
        }
        primary: {
            main: string;
        },
        loginButton: {
            background: string,
            color: string
        }
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        primary?: {
            main?: string;
        };
        status?: {
            danger?: string;
            success?: string;
            fail?: string;
        };
        loginButton?: {
            background?: string,
            color?: string
        }
    }
}
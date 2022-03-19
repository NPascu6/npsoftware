import React from 'react';
import './App.css';
import {Grid, ThemeProvider} from "@mui/material";
import theme from './themes/mainTheme'
import MainPage from "./pages/Main";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import TopBar from "./components/TopBar";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div style={{
                backgroundColor: theme.palette.secondary.main,
                height: '100vh',
                alignItems: 'center',
                flexDirection: 'column',
                display: 'flex'
            }}>
                <Grid container justifyContent={"center"}><TopBar/></Grid>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>

        </ThemeProvider>
    );
}

export default App;
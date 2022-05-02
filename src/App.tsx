import React, {useEffect} from 'react';
import './App.css';
import {ThemeProvider} from "@mui/material";
import theme from './themes/mainTheme'
import MainPage from "./pages/Main";
import About from "./pages/About";
import TopBar from "./components/TopBar";
import {Route, Routes, useNavigate,} from "react-router-dom";
import Login from "./pages/Login";
import {useSelector} from "react-redux";
import {RootState} from "./store/slices/rootSlice";

const App = () => {
    const {user} = useSelector((state: RootState) => state.app);
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/login')
        } else
            navigate('/')
    }, [user, navigate])

    return (
        <ThemeProvider theme={theme}>
            <div style={{
                backgroundColor: theme.palette.secondary.main,
                height: '100vh',
                alignItems: 'center',
                flexDirection: 'column',
                display: 'flex'
            }}>
                {!user && <TopBar/>}
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/about" element={<About type={'detailed'}/>}/>
                </Routes>
                {!user && <About type={'simple'}/>}
            </div>

        </ThemeProvider>
    );
}

export default App;
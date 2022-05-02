import React, {useEffect} from 'react';
import './App.css';
import {ThemeProvider} from "@mui/material";
import theme from './themes/mainTheme'
import MainPage from "./pages/Main";
import About from "./pages/About";
import TopBar from "./components/TopBar";
import {Route, Routes, useLocation, useNavigate,} from "react-router-dom";
import Login from "./pages/Login";
import {useSelector} from "react-redux";
import {RootState} from "./store/slices/rootSlice";
import Register from "./pages/Register";
import Reset from "./pages/Reset";

const App = () => {
    const {firebaseUser} = useSelector((state: RootState) => state.app);
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!firebaseUser &&
            location.pathname !== '/about' &&
            location.pathname !== '/register' &&
            location.pathname !== '/login' &&
            location.pathname !== '/reset') {
            navigate('/login')
        }
    }, [firebaseUser, navigate, location.pathname])

    return (
        <ThemeProvider theme={theme}>
            <div style={{
                backgroundColor: theme.palette.secondary.main,
                height: '100vh',
                alignItems: 'center',
                flexDirection: 'column',
                display: 'flex'
            }}>
                <TopBar/>
                <Routes>
                    <Route path="*" element={<MainPage/>}/>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/reset" element={<Reset/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/about" element={<About type={'detailed'}/>}/>
                </Routes>
                {!firebaseUser && location.pathname !== '/about' && <About type={'simple'}/>}
            </div>
        </ThemeProvider>
    );
}

export default App;
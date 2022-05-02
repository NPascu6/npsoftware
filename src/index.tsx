import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {HashRouter } from "react-router-dom";

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <HashRouter >
            <App/>
        </HashRouter >
    </Provider>);

reportWebVitals();

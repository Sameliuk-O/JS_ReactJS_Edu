import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import {CssBaseline} from "@mui/material";

import App from './App';
import {store} from "./store";

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <CssBaseline/>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>);

reportWebVitals();

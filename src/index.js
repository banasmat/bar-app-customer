import './index.css';
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
import AlertTemplate from 'react-alert-template-basic';
import { Provider as AlertProvider } from 'react-alert';

render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate}>
            <App />
        </AlertProvider>
    </Provider>,
    document.getElementById("root")
);
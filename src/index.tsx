import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./redux/store/store";
import {BrowserRouter as Router} from "react-router-dom";
import {Global} from "./globalStyles/global";
import {ThemeProvider} from "styled-components";
import {theme} from "./globalStyles/theme";

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<Provider store={store}>
    <ThemeProvider theme={theme}>
    <Global/>
    <Router>
    <App />
    </Router>
    </ThemeProvider>
</Provider>
);



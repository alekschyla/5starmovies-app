import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import './index.css';
import StarMoviesApp from './StarMoviesApp';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Auth from "./components/Auth";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#342A21'
        },
        secondary: {
            main: '#71816D'
        },
    },
    typography: {
        useNextVariants: true,
    },
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Auth>
                <StarMoviesApp />
            </Auth>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);



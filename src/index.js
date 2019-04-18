import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StarMoviesApp from './StarMoviesApp';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
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
});

ReactDOM.render(
        <Auth>
            <MuiThemeProvider theme={theme}>
                <StarMoviesApp/>
            </MuiThemeProvider>
        </Auth>
    , document.getElementById('root')
);



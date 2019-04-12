import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StarMoviesApp from './StarMoviesApp';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#342A21'
        },
        secondary: {
            main: '#71816D'
        },
    },
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <StarMoviesApp />
    </MuiThemeProvider>
    , document.getElementById('root'));



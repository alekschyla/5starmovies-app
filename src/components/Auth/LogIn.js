import React from 'react';
import styles from '../../styles';
import logo from '../../images/logo_transparent.png';
import { Fab, TextField } from '@material-ui/core';

const LogIn = (props) => {
    return (
        <div
            style={styles['LogIn']}
        >
            <img src={logo} alt="5starMovies" />

            <div
                style={styles['LogIn-container']}
            >
                <div
                    style={styles['LogIn-container-row']}
                >
                    <label htmlFor="email">Email: </label>
                    <TextField
                        id={'email'}
                        type={'text'}
                        label={"Tu wpisz swój e-mail"}
                        style={styles['LogIn-textarea']}
                        value={props.email}
                        onChange={(event) => props.onEmailChange(event.target.value)}
                        variant="filled"
                    />
                </div>

                <div
                    style={styles['LogIn-container-row']}
                >
                    <label htmlFor="password">Hasło: </label>
                    <TextField
                        id={'password'}
                        type={'password'}
                        label={"Tu wpisz swoje hasło"}
                        style={styles['LogIn-textarea']}
                        value={props.password}
                        onChange={(event) => props.onPasswordChange(event.target.value)}
                        variant="filled"
                    />
                </div>

                <span
                    style={styles['LogIn-text']}
                >
                    Nie masz konta? <a href={'/signUp'}>Zarejestruj się</a>
                </span>

                <div
                    style={styles['LogIn-text']}
                >
                    <Fab
                        style={styles['LogIn-button']}
                        color='secondary'
                        variant='extended'
                        onClick={props.onLogInClick}
                    >
                        zaloguj
                    </Fab>
                    <Fab
                        style={styles['LogIn-button']}
                        color='secondary'
                        variant='extended'
                        onClick={props.onLogInByGoogleClick}
                    >
                        zaloguj przez Google
                    </Fab>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
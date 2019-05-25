import React from 'react';
import styles from "../../styles";
import logo from '../../images/logo_transparent.png';
import { Fab, TextField } from '@material-ui/core';

const SignUp = (props) => {
    return (
        <div
            style={styles['LogIn']}
        >
            <img src={logo} alt="5starMovies" />

            <div
                style={styles['Register-container']}
            >
                <div
                    style={styles['LogIn-container-row']}
                >
                    <label htmlFor="email">E-mail: </label>
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
                    <label htmlFor="userName">Nazwa użytkownika: </label>
                    <TextField
                        id={'userName'}
                        type={'text'}
                        label={"Tu wpisz swoją ksywkę"}
                        style={styles['LogIn-textarea']}
                        value={props.userName}
                        onChange={event => props.onUserChange(event.target.value)}
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
                        onChange={event => props.onPasswordChange(event.target.value)}
                        variant="filled"
                    />
                </div>
                <div
                    style={styles['LogIn-container-row']}
                >
                    <label htmlFor="passwordCheck">Powtórz hasło: </label>
                    <TextField
                        id={'passwordCheck'}
                        type={'password'}
                        label={"Tu wpisz ponownie swoje hasło"}
                        style={styles['LogIn-textarea']}
                        value={props.passwordCheck}
                        onChange={event => props.onPasswordCheckChange(event.target.value)}
                        variant="filled"
                    />
                </div>
                {
                    props.ifPasswordMatch ?
                        ''
                        :
                        <div
                            style={styles['LogIn-info']}
                        >hasła nie pasują</div>
                }
                <div>
                    <Fab
                        style={styles['LogIn-button']}
                        color='secondary'
                        variant='extended'
                        onClick={props.onRegistrationClick}
                    >
                        zarejestruj się
                    </Fab>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
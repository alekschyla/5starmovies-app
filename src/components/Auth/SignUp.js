import React from 'react';
import styles from "../../styles";
import {comparePasswordsActionCreator} from "../../state/auth";

const SignUp = (props) => {
    return (
        <div
            style={styles['LogIn']}
        >
            <div
                style={styles['LogIn-container']}
            >
                <div>
                    <label htmlFor="email">E-mail: </label>
                    <input
                        id={'email'}
                        type={'text'}
                        value={props.email}
                        onChange={(event) => props.onEmailChange(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="userName">Nazwa użytkownika: </label>
                    <input
                        id={'userName'}
                        type={'text'}
                        value={props.userName}
                        onChange={event => props.onUserChange(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Hasło: </label>
                    <input
                        id={'password'}
                        type={'password'}
                        value={props.password}
                        onChange={event => props.onPasswordChange(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="passwordCheck">Powtórz hasło: </label>
                    <input
                        id={'passwordCheck'}
                        type={'password'}
                        value={props.passwordCheck}
                        onChange={event => props.onPasswordCheckChange(event.target.value)}
                    />
                </div>
                {
                    props.ifPasswordMatch ?
                        ''
                        :
                        <div
                            style={{
                                fontSize: '10px',
                                color: 'red',
                            }}
                        >hasła nie pasują</div>
                }
                <div>
                    <button
                        onClick={props.onRegistrationClick}
                    >
                        zarejestruj się
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
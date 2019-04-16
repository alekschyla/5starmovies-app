import React from 'react';
import styles from "../../styles";

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
                        onChange={props.onEmailChange}
                    />
                </div>
                <div>
                    <label htmlFor="userName">Nazwa użytkownika: </label>
                    <input
                        id={'userName'}
                        type={'text'}
                        value={props.userName}
                        onChange={props.onUserChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Hasło: </label>
                    <input
                        id={'password'}
                        type={'password'}
                        value={props.password}
                        onChange={props.onPasswordChange}
                    />
                </div>
                <div>
                    <label htmlFor="passwordCheck">Powtórz hasło: </label>
                    <input
                        id={'passwordCheck'}
                        type={'password'}
                        value={props.passwordCheck}
                        onChange={props.onPasswordCheckChange}
                    />
                </div>
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
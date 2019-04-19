import React from 'react';
import styles from '../../styles';


const LogIn = (props) => {
    return (
        <div
            style={styles['LogIn']}
        >
            <div
                style={styles['LogIn-container']}
            >
                <div>
                    <label htmlFor="userName">Nazwa użytkownika: </label>
                    <input
                        id={'userName'}
                        type={'text'}
                        value={props.email}
                        onChange={(event) => props.onEmailChange(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Hasło: </label>
                    <input
                        id={'password'}
                        type={'password'}
                        value={props.password}
                        onChange={(event) => props.onPasswordChange(event.target.value)}
                    />
                </div>

                <span
                    style={styles['LogIn-text']}
                >
                    Nie masz konta? <a href={'/signUp'}>Zarejestruj się</a>
                </span>

                <div>
                    <button
                        onClick={props.onLogInClick}
                    >
                        zaloguj
                    </button>
                </div>

                <div>
                    <button
                        onClick={props.onLogInByGoogleClick}
                    >
                        zaloguj przez Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
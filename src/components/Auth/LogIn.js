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
                    <input
                        type={'text'}
                        value={props.email}
                        onChange={props.onEmailChange}
                    />
                </div>

                <div>
                    <input
                        type={'password'}
                        value={props.password}
                        onChange={props.onPasswordChange}
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
                        onClick={props.onLogInNyGoogleClick}
                    >
                        zaloguj przez Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
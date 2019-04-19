import React from 'react';
import {connect} from 'react-redux';
import LogIn from './LogIn'
import {BrowserRouter as Router, Route} from "react-router-dom";
import SignUp from "./SignUp";
import {changeEmailActionCreator,
    changePasswordActionCreator,
    logInAsyncActionCreator,
    logInByGoogleAsyncActionCreator} from '../../state/auth'

const Auth = (props) => {
    return (
        <div>
            {
                props._user ?
                    props.children
                    :
                    <Router>
                        <Route
                            exact
                            path={"/"}
                            render={(renderProps) => {
                                return (
                                    <LogIn
                                        {...props}
                                        email={props._email}
                                        password={props._password}
                                        onEmailChange={props._changeEmail}
                                        onPasswordChange={props._changePassword}
                                        onLogInClick={props._logIn}
                                        onLogInByGoogleClick={props._logInByGoogle}
                                    />
                                )
                            }}
                        />

                        <Route
                            path={"/signUp"}
                            render={(props) =>
                                <SignUp
                                    {...props}
                                    email={props._email}
                                    password={props._password}
                                    passwordCheck={props._passwordConfirm}
                                    userName={props._userName}
                                    onEmailChange={props._changeEmail}
                                    onPasswordChange={props._changePassword}
                                    onPasswordCheckChange={() => {}}
                                    onUserChange={() => {}}
                                    onRegistrationClick={() => {}}
                                />
                            }
                        />
                    </Router>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    _user: state.auth.user,
    _email: state.auth.email,
    _password: state.auth.password,
    _passwordConfirm: state.auth.passwordConfirm,
    _userName: state.auth.userName,
});

const mapDispatchToProps = dispatch => ({
    _changeEmail: (value) => dispatch(changeEmailActionCreator(value)),
    _changePassword: (value) => dispatch(changePasswordActionCreator(value)),
    _logIn: () => dispatch(logInAsyncActionCreator()),
    _logInByGoogle: () => dispatch(logInByGoogleAsyncActionCreator())
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

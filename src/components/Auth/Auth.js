import React from 'react';
import {connect} from 'react-redux';
import LogIn from './LogIn'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./SignUp";

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
                            render={(props) => {
                                return (
                                    <LogIn
                                        {...props}
                                        email={''}
                                        password={''}
                                        onEmailChange={() => { }}
                                        onPasswordChange={() => { }}
                                        onLogInClick={() => { }}
                                        onLogInByGoogleClick={() => { }}
                                    />
                                )
                            }}
                        />

                        <Route
                            path={"/signUp"}
                            render={(props) =>
                                <SignUp
                                    {...props}
                                    email={''}
                                    password={''}
                                    passwordCheck={''}
                                    userName={''}
                                    onEmailChange={() => {}}
                                    onPasswordChange={() => {}}
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

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

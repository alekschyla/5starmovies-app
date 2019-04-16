import React, {Component} from 'react';
import {auth} from '../../firebaseConfig'
//import {googleProvider} from '../firebaseConfig'

import LogIn from './LogIn'
import {BrowserRouter as Router, Route} from "react-router-dom";
import SignUp from "./SignUp";

class Auth extends Component {
    state = {
        isUserLoggedIn: false,
        email: 'email',
        password: 'password',
        passwordCheck: 'password',
        isPasswordMatch: false,
        userName: 'user'
    };

    componentDidMount() {
        auth.onAuthStateChanged(
            (user) => {
                if (user) {
                    this.setState({isUserLoggedIn: true})
                } else {
                    this.setState({isUserLoggedIn: false})
                }
            }
        )
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    };

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    };

    onPasswordCheckChange = (event) => {
        this.setState({passwordCheck: event.target.value})
    };

    onUserChange = (event) => {
        this.setState({userName: event.target.value})
    };

    onRegistrationClick = () => {
        this.isPasswordMatch();

        if (this.state.isPasswordMatch) {
            auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                        let user = auth.currentUser;

                        user.updateProfile({
                            displayName: this.state.userName,
                        })
                    }
                )
                .catch(console.log);
        } else {
            alert("Password doesn't match");
        }
    };

    isPasswordMatch = () => {
        if (this.state.password === this.state.passwordCheck) {
            this.state.isPasswordMatch = true;
        }
    };


    onLogInClick = () => {
        auth.signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        )
            .catch(console.log)
    };

    render() {
        return (

            <div>
                {
                    this.state.isUserLoggedIn ?
                        this.props.children
                        :
                        <Router>
                            <Route
                                exact
                                path={"/"}
                                render={(props) =>
                                    <LogIn {...props}
                                           email={this.state.email}
                                           password={this.state.password}
                                           onEmailChange={this.onEmailChange}
                                           onPasswordChange={this.onPasswordChange}
                                           onLogInClick={this.onLogInClick}
                                    />}
                            />
                            <Route
                                path={"/signUp"}
                                render={(props) =>
                                    <SignUp {...props}
                                            email={this.state.email}
                                            password={this.state.password}
                                            passwordCheck={this.state.passwordCheck}
                                            userName={this.state.userName}
                                            onEmailChange={this.onEmailChange}
                                            onPasswordChange={this.onPasswordChange}
                                            onPasswordCheckChange={this.onPasswordCheckChange}
                                            onUserChange={this.onUserChange}
                                            onRegistrationClick={this.onRegistrationClick}
                                    />}
                            />
                        </Router>
                }
            </div>
        );
    }
}

export default Auth;
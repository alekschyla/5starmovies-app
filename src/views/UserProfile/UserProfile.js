import React from 'react';
import { Redirect } from 'react-router-dom';
import { onClickSubmitFormAsyncActionCreator, setRedirectActionCreator, setErrorActionCreator, setNameCheckActionCreator, setSuccessActionCreator, setURLCheckActionCreator, setEmailCheckActionCreator } from '../../state/userProfile';
import { Paper, Fab, TextField } from '@material-ui/core';
import styles from '../../styles';
import { connect } from 'react-redux';
import SnackBar from '../../components/SnackBar';

class UserProfile extends React.Component {
    state = {
        userName: "",
        userEmail: "",
        userPhotoURL: "",
    }

    componentDidMount() {
        this.props._setRedirect(false);
        this.props._setNameCheck(true);
        this.props._setEmailCheck(true);
        this.props._setURLCheck(true);
        this.props._setError(false);
        this.props._setSuccess(false);
    }

    componentWillUnmount() {
        this.props._setRedirect(false);
        this.props._setNameCheck(true);
        this.props._setEmailCheck(true);
        this.props._setURLCheck(true);
        this.props._setError(false);
        this.props._setSuccess(false);
    };

    handleChange = (key) => (event) => this.setState({ [key]: event.target.value });

    render() {
        return (
            <div>
                {
                    this.props._redirect ?
                        <Redirect to={`/dashboard`} />
                        : <Paper
                            style={styles['AddRating-paper']}
                        >
                            <h1
                                style={styles['AddRating-textfield']}
                            >
                                Zaktualizuj swój profil:
                            </h1>
                            <div
                                style={styles['AddRating-textfield']}
                            >
                            </div>
                            <TextField
                                label={`Twoja nazwa użytkownika to ${this.props._userName} - kliknij, aby zmienić`}
                                style={styles['AddRating-textfield']}
                                type={'text'}
                                placeholder={'Tu wpisz swoją nową nazwę użytkownika'}
                                value={this.state._userName}
                                onChange={this.handleChange('userName')}
                                variant="filled"
                            />
                            <TextField
                                label={`Twój adres e-mail to ${this.props._userEmail} - kliknij, aby zmienić`}
                                style={styles['AddRating-textfield']}
                                type={'email'}
                                placeholder={'Tu wpisz swój nowy adres e-mail'}
                                value={this.state._userEmail}
                                onChange={this.handleChange('userEmail')}
                                variant="filled"
                            />
                            <img
                                src={this.state._userPhotoURL || this.props._userPhotoURL}
                                alt={'avatar'}
                                style={styles['UserProfile-avatar']}
                            />
                            <TextField
                                label={`Adres URL twojego zdjęcia - kliknij, aby zmienić`}
                                style={styles['AddRating-textfield']}
                                type={'text'}
                                placeholder={'Tu wklej nowy adres URL towjego zdjęcia'}
                                value={this.state._userPhotoURL}
                                onChange={this.handleChange('userPhotoURL')}
                                variant="filled"
                            />
                            <Fab
                                style={styles['UserProfile-button']}
                                color='secondary'
                                variant='extended'
                                onClick={() => this.props._onClickSubmitForm(this.state.userName, this.state.userEmail, this.state.userPhotoURL)}
                            >
                                Zapisz zmiany
                            </Fab>
                            <SnackBar
                                warning={!this.props._dataCheck}
                                message={"Nie można zapisać: podane dane są nieprawidłowe lub nie wypełniono wszystkich wymaganych pól."}
                            />
                            <SnackBar
                                success={this.props._success}
                            />
                        </Paper>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _dataCheck: state.userProfile.nameCheck && state.userProfile.emailCheck && state.userProfile.urlCheck,
    _redirect: state.userProfile.redirect,
    _userName: state.auth.user.displayName,
    _userEmail: state.auth.user.email,
    _userPhotoURL: state.auth.user.photoURL,
    _success: state.userProfile.success,
    _error: state.userProfile.error,
});

const mapDispatchToProps = dispatch => ({
    _onClickSubmitForm: (userName, userEmail, userPhotoURL) => dispatch(onClickSubmitFormAsyncActionCreator(userName, userEmail, userPhotoURL)),
    _setRedirect: (boolean) => dispatch(setRedirectActionCreator(boolean)),
    _setNameCheck: (boolean) => dispatch(setNameCheckActionCreator(boolean)),
    _setEmailCheck: (boolean) => dispatch(setEmailCheckActionCreator(boolean)),
    _setURLCheck: (boolean) => dispatch(setURLCheckActionCreator(boolean)),
    _setError: (boolean) => dispatch(setErrorActionCreator(boolean)),
    _setSuccess: (boolean) => dispatch(setSuccessActionCreator(boolean)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserProfile);
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import logo from '../../images/logo.png';
import styles from '../../styles';
import userPhoto from '../../images/user.svg';

class AppBar extends React.Component {

    render() {
        return (

            <MUIAppBar
                position="static"
                style={styles['AppBar']}
            >
                <Toolbar>
                    <IconButton
                        onClick={this.props.toggleSideBar}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        style={styles['AppBar-logo']}
                        variant="h6"
                        color="inherit"
                    >
                        <img src={logo} alt="5starMovies" />
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <p>Witaj, {this.props._userName}!</p>
                    <Tooltip title="Wyświetl swój profil">
                        <Link
                            to={'/user-profile'}
                        >
                            <img
                                style={styles['AppBar-logo']}
                                src={this.props._userPhoto}
                                alt={''}
                                width={'50px'}
                                height={'50px'}
                            />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Wyloguj">
                        <IconButton
                            color="inherit"
                            onClick={this.props.logOut}
                        >
                            <PowerSettingsNew />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </MUIAppBar>

        )
    }
}

const mapStateToProps = state => ({
    _userPhoto: (state.auth.user && state.auth.user.photoURL) || userPhoto,
    _userName: state.auth.user && state.auth.user.displayName,
});

export default connect(mapStateToProps)(AppBar);
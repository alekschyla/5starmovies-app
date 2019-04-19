import React from 'react'

import MUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';

import styles from '../../styles';

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
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        5StarMovies
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={this.props.logOut}
                    >
                        <PowerSettingsNew/>
                    </IconButton>
                </Toolbar>
            </MUIAppBar>

        )
    }
}

export default AppBar
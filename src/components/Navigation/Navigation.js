import React from 'react'
import {connect} from 'react-redux';

import SideBar from './SideBar'
import AppBar from './AppBar'
import {logOutAsyncActionCreator} from "../../state/auth";

class Navigation extends React.Component {

    state = {
        isSideBarOpen: false
    };

    toggleSideBar = () => this.setState({
        isSideBarOpen: !this.state.isSideBarOpen
    });

    render() {
        return (
            <div>
                <AppBar
                    toggleSideBar={this.toggleSideBar}
                    logOut={this.props._logOut}
                />
                <SideBar
                    isSideBarOpen={this.state.isSideBarOpen}
                    toggleSideBar={this.toggleSideBar}
                />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    _logOut: () => dispatch(logOutAsyncActionCreator())
});

export default connect(null, mapDispatchToProps)(Navigation);

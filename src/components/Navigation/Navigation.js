import React from 'react'
import SideBar from './SideBar'
import AppBar from './AppBar'

class Navigation extends React.Component {

    render() {
        return(
            <div>
                <AppBar />
                <SideBar />
            </div>
        )
    }
    }

    export default Navigation
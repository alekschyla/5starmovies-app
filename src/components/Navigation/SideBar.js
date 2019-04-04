import React from 'react'
import Menu from './Menu'
import Drawer from '@material-ui/core/Drawer';

const styles = {
    drawer: {
        width: '300px'
    }
};


class SideBar extends React.Component {

    render() {
        return (
            <div>
                <Drawer
                    open={this.props.isSideBarOpen}
                    onClose={this.props.toggleSideBar}
                >
                    <div
                        style={styles.drawer}
                    >
                        <Menu 
                        toggleSideBar={this.props.toggleSideBar}
                        />
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default SideBar
import React from 'react'
import { Link } from 'react-router-dom'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <MenuList>
                    <Link to="/">
                        <MenuItem
                            onClick={this.props.toggleSideBar}
                        >
                            Strona główna
                        </MenuItem>
                    </Link>

                    <Link to="/search">
                        <MenuItem
                            onClick={this.props.toggleSideBar}
                        >
                            Wyszukaj
                        </MenuItem>
                    </Link>

                    <Link to="/watch-list">
                        <MenuItem
                            onClick={this.props.toggleSideBar}
                        >
                            Do obejrzenia
                        </MenuItem>
                    </Link>

                </MenuList>
            </div>
        )
    }

}

export default Menu
import React from 'react'
import { Link } from 'react-router-dom'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import styles from '../../styles';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <MenuList>
                    <Link
                        to="/"
                        style={styles['Menu-link']}
                    >
                        <MenuItem
                            onClick={this.props.toggleSideBar}
                        >
                            Strona główna
                        </MenuItem>
                    </Link>

                    <Link
                        to="/search"
                        style={styles['Menu-link']}
                    >
                        <MenuItem
                            onClick={this.props.toggleSideBar}
                        >
                            Wyszukaj
                        </MenuItem>
                    </Link>

                    <Link
                        to="/watch-list"
                        style={styles['Menu-link']}
                    >
                        <MenuItem
                            onClick={this.props.toggleSideBar}
                        >
                            Do obejrzenia
                        </MenuItem>
                    </Link>

                    <Link
                        to="/fav-movies"
                        style={styles['Menu-link']}
                    >
                        <MenuItem
                            onClick={this.props.toggleSideBar}
                        >
                            Ulubione filmy
                        </MenuItem>
                    </Link>

                </MenuList>
            </div>
        )
    }

}

export default Menu
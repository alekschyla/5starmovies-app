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
                        <MenuItem>
                            Strona glowna
                        </MenuItem>

                    </Link>
                    <Link to="/search">
                        <MenuItem>
                            Wyszukaj
                    </MenuItem>
                    </Link>
                    <Link to="/watch-list">
                        <MenuItem>
                            Do obejrzenia
                    </MenuItem>
                    </Link>
                    <Link to="/add-rating">
                        <MenuItem>
                            Dodaj ocene
                    </MenuItem>
                    </Link>
                </MenuList>
            </div>
        )
    }

}
export default Menu
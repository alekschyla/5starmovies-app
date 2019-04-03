import React from 'react'
import {Link} from 'react-router-dom'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <MenuList>
                    <MenuItem>
                        <Link to="/">Dashboard</Link>
                    </MenuItem>
                </MenuList>
            </div>
        )
    }

}
export default Menu
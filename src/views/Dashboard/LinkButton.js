import React from 'react';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import styles from '../../styles';

class LinkButton extends React.Component {
    render() {
        return (
            <Link 
                to={this.props.to}
                style={styles['Dashboard-linkbutton']}
            >
                <Fab
                    color='secondary'
                    variant='extended'
                >
                    {this.props.value}
                </Fab>
            </Link>
        )
    }
}

export default LinkButton
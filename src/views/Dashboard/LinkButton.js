import React from 'react';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';

const styles = {
    linkbutton: {
        margin: '20px',
        textDecoration: 'none'
    }
}

class LinkButton extends React.Component {
    render() {
        return (
            <Link 
                to={this.props.to}
                style={styles.linkbutton}
            >
                <Fab
                    color='primary'
                    variant='extended'
                >
                    {this.props.value}
                </Fab>
            </Link>
        )
    }
}

export default LinkButton
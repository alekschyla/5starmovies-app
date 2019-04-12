import React from 'react';
import styles from '../../styles';
import { Fab } from '@material-ui/core';


const AddButton = (props) => {
    return (
        <div>
            <Fab
                variant="extended"
                color="primary"
                style={styles['OmdbDetails-button']}
                onClick={() => props.addToFavourites(props.id)}
            >
                dodaj do ulubionych
            </Fab>
        </div>
    );
};

export default AddButton;
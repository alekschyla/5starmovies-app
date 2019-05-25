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
                onClick={() => props.addToWatchList()}
            >
                dodaj do obejrzenia
            </Fab>
        </div>
    );
};

export default AddButton;
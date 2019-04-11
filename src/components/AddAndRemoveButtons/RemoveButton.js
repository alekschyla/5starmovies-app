import React from 'react';
import styles from "../../styles";
import {Fab} from "@material-ui/core";

const RemoveButton = (props) => {
    return (
        <div>
            <Fab
                variant="extended"
                color="primary"
                style={styles['OmdbDetails-button']}
                onClick={() => props.removeFromWatchList(props.id)}
            >
                usuń z do obejrzenia
            </Fab>
        </div>
    );
};

export default RemoveButton;

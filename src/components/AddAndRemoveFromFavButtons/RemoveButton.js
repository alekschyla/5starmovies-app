import React from 'react';
import styles from "../../styles";
import { Fab } from "@material-ui/core";

const RemoveButton = (props) => {
    return (
        <div>
            <Fab
                variant="extended"
                color="primary"
                style={styles['OmdbDetails-button']}
                onClick={() => props.removeFromFavourites(props.id)}
            >
                usuń z ulubionych
            </Fab>
        </div>
    );
};

export default RemoveButton;
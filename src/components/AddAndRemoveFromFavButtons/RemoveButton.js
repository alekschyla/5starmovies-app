import React from 'react';
import styles from "../../styles";
import { Fab } from "@material-ui/core";
import Favorite from '@material-ui/icons/Favorite'
import Tooltip from "@material-ui/core/Tooltip";

const RemoveButton = (props) => {
    return (
        <div>
            <Tooltip title="usuń z ulubionych">
                <Fab
                    variant="extended"
                    color="primary"
                    style={styles['OmdbDetails-button']}
                    onClick={() => props.removeFromFavourites()}
                >
                    <Favorite />
                </Fab>
            </Tooltip>
        </div>
    );
};

export default RemoveButton;
import React from 'react';
import styles from "../../styles";
import { Fab } from "@material-ui/core";
import FavoriteDelete from '@material-ui/icons/FavoriteBorder'
import Tooltip from "@material-ui/core/Tooltip";

const RemoveButton = (props) => {
    return (
        <div>
            <Tooltip title="dodaj do ulubionych">
            <Fab
                variant="extended"
                color="primary"
                style={styles['OmdbDetails-button']}
                onClick={() => props.removeFromFavourites(props.id)}
            >
                <FavoriteDelete />
            </Fab>
            </Tooltip>
        </div>
    );
};

export default RemoveButton;
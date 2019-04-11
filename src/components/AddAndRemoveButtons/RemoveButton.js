import React from 'react';
import Button from '@material-ui/core/Button';

const RemoveButton = (props) => {
    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => props.removeFromWatchList(props.id)}
            >
                usuń z do obejrzenia
            </Button>
        </div>
    );
};

export default RemoveButton;

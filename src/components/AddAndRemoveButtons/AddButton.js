import React from 'react';
import Button from '@material-ui/core/Button';


const AddButton = (props) => {
    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => props.addToWatchList(props.id)}
            >
                dodaj do obejrzenia
            </Button>
        </div>
    );
};

export default AddButton;
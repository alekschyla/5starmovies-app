import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MUISearch from '@material-ui/icons/Search';

function FormSearch(props) {
    return (
        <div
            style={{width: '70%', margin: '15px auto', padding: '10px', boxShadow: '2px 2px 5px #333', borderRadius: '5px'}}
        >
            <TextField
                fullWidth={true}
                placeholder={'wpisz tytuł'}
                value={props.searchTerm}
                onChange={props.getSearchTerm}
                margin="normal"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MUISearch/>
                        </InputAdornment>
                    ),
                }}
            />



        </div>
    );
}

export default FormSearch
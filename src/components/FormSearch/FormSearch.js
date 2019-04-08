import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MUISearch from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import Slider from '@material-ui/lab/Slider';

class FormSearch extends React.Component {


    render() {
        return (
            <div
                style={{
                    width: '70%',
                    margin: '15px auto',
                    padding: '10px',
                    boxShadow: '2px 2px 5px #333',
                    borderRadius: '5px'
                }}
            >
                <TextField
                    placeholder={'wpisz tytuł'}
                    value={this.props.searchTerm}
                    onChange={this.props.getSearchTerm}
                    margin="normal"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MUISearch/>
                            </InputAdornment>
                        ),
                    }}
                    style={{width: '60%', margin: '10px'}}
                />

                <Button

                    onClick={() => this.props.getMoviesBySearchTerm(this.props.searchTerm)}
                    variant="contained"
                    color="primary"
                >
                    wyszukaj
                </Button>

                <NativeSelect
                    style={{
                        margin: '10px'
                    }
                    }
                    value={this.props.type}
                    onChange={(event) => {
                        this.props.getType(event);
                    }}
                    onClick={() => this.props.getMoviesByType(this.props.type, this.props.searchTerm)}
                >
                    <option value="">Typ</option>
                    <option value={'movie'}>Film</option>
                    <option value={'series'}>Serial</option>
                    <option value={'episode'}>Odcinek</option>
                </NativeSelect>

                <Slider
                    style={{
                        width: '90%',
                        padding: '10px',
                        margin: '0 auto'
                    }}
                    value={this.props.year}
                    min={1950}
                    max={2022}
                    step={1}
                    onChange={this.props.getYear}
                    onDragEnd={() => this.props.getMoviesByYear(this.props.year, this.props.searchTerm)}
                />
            </div>
        );
    }
}

export default FormSearch
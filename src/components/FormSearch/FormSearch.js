import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MUISearch from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
const Range = Slider.Range;

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

                <Range
                    style={{
                        width: '90%',
                        margin: '0 auto',
                        padding: '10px',
                    }}
                    step={1}
                    min={1950}
                    max={new Date().getFullYear() + 5}
                    defaultValue={[this.props.year[0], this.props.year[1]]}
                    onChange={this.props.getYear}
                    onAfterChange={() => this.props.getMoviesByYear(this.props.searchTerm)}
                />
            </div>
        );
    }
}

export default FormSearch
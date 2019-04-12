import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MUISearch from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import NativeSelect from '@material-ui/core/NativeSelect';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import styles from '../../styles';

const Range = Slider.Range;

class FormSearch extends React.Component {
    render() {
        return (
            <div
                style={styles['FormSearch-container']}
            >
                <TextField
                    placeholder={'wpisz tytuł'}
                    value={this.props.searchTerm}
                    onChange={this.props.getSearchTerm}
                    margin="normal"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MUISearch />
                            </InputAdornment>
                        ),
                    }}
                    style={styles['FormSearch-textfield']}
                />

                <Fab

                    onClick={() => this.props.getMoviesBySearchTerm(this.props.searchTerm)}
                    variant='extended'
                    color="primary"
                >
                    wyszukaj
                </Fab>

                <NativeSelect
                    style={styles['FormSearch-nativeselect']}
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

                <p>Wyszukaj po roku: od <strong>{this.props.year[0]}</strong> do <strong>{this.props.year[1]}</strong></p>
                <Range
                    style={styles['FormSearch-range']}
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
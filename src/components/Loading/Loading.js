import React from 'react';
import styles from '../../styles.js';
import CircularProgress from '@material-ui/core/CircularProgress/index';


const Loading = () => {
    return (
        <div
        style={styles['Loading-container']}
        >
            <CircularProgress
            style={styles['Loading']}
            />
        </div>
    );
};

export default Loading;
import React from 'react';
import { Paper } from '@material-ui/core';
import styles from '../../styles';

const makeKeysArray = (movieComments) => {
    let keys = [];
    keys = Object.entries(movieComments).map(([key, value]) => keys.concat(key));
    return keys;
}

const MovieComments = (props) => {

    return (
        <Paper
            style={styles['MovieComments-paper']}
        >
            <div>
                <h3>Oceny i komentarze do filmu:</h3>
            </div>
            <div
                style={styles['MovieComments-comments']}
            >
                {
                    makeKeysArray(props.movieComments).map((key, index) => {
                        return (
                            <Paper
                                style={styles['MovieComments-comment']}
                                key={[key[0]]}
                            >
                                <h4>Komentarz {Number([index]) + 1}</h4>
                                <div
                                    style={styles['MovieComments-comment__div']}
                                >
                                    <div
                                        style={styles['MovieComments-comment__desc']}
                                    >
                                        <p
                                            style={styles['MovieComments-comment__par']}
                                        >
                                            Ocena użytkownika
                                        </p>
                                        {
                                            props.movieComments[key[0]].desc
                                                ? <p>Komentarz użytkownika</p>
                                                : null
                                        }
                                        <p
                                            style={styles['MovieComments-comment__par']}
                                        >
                                            Ocenę wystawił/a
                                        </p>
                                        <p
                                            style={styles['MovieComments-comment__par']}
                                        >
                                            E-mail użytkownika
                                        </p>
                                    </div>
                                    <div
                                        style={styles['MovieComments-comment__text']}
                                    >
                                        <p
                                            style={styles['MovieComments-comment__par']}
                                        >
                                            {props.movieComments[key[0]].mark}/5
                                            </p>
                                        {
                                            props.movieComments[key[0]].desc
                                                ? <p>{props.movieComments[key[0]].desc}</p>
                                                : null
                                        }
                                        <p
                                            style={styles['MovieComments-comment__par']}
                                        >
                                            {props.movieComments[key[0]].name}
                                        </p>
                                        <p
                                            style={styles['MovieComments-comment__par']}
                                        >
                                            {props.movieComments[key[0]].email}
                                        </p>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </div>
        </Paper>
    )
}

export default MovieComments;

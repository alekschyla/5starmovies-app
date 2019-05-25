import React from 'react';
import { Paper } from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import styles from '../../styles';

const makeKeysArray = (movieComments) => {
    let keys = [];
    keys = Object.entries(movieComments).map(([key, value]) => keys.concat(key));
    return keys;
};

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
                                {
                                    key[0] === props.userUid ?
                                        <h4>Twój Komentarz </h4>
                                        : null
                                }
                                <div
                                    style={styles['MovieComments-comment__div']}
                                >
                                    <div
                                        style={styles['MovieComments-comment__row']}
                                    >
                                        <div
                                            style={styles['MovieComments-comment__desc']}
                                        >
                                            Ocena użytkownika
                                        </div>
                                        <div
                                            style={styles['MovieComments-comment__text']}
                                        >
                                            <StarRatings
                                                rating={Number(props.movieComments[key[0]].mark) || 0}
                                                starRatedColor='yellow'
                                                numberOfStars={5}
                                                starDimension="30px"
                                                starSpacing="10px"
                                                name='rating'
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={styles['MovieComments-comment__row-big']}
                                    >
                                        {
                                            props.movieComments[key[0]].desc
                                                ? <p
                                                    style={styles['MovieComments-comment__desc']}
                                                >Komentarz użytkownika</p>
                                                : null
                                        }
                                        {
                                            props.movieComments[key[0]].desc
                                                ? <p
                                                    style={styles['MovieComments-comment__text']}
                                                >{props.movieComments[key[0]].desc}</p>
                                                : null
                                        }
                                    </div>
                                    <div
                                        style={styles['MovieComments-comment__row']}
                                    >
                                        <div
                                            style={styles['MovieComments-comment__desc']}
                                        >
                                            Ocenę wystawił/a
                                        </div>
                                        <div
                                            style={styles['MovieComments-comment__text']}
                                        >
                                            {props.movieComments[key[0]].name}
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </div>
        </Paper>
    )
};

export default MovieComments;

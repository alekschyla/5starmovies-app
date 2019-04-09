import React from 'react';

const makeKeysArray = (props) => {
    let keys = [];
    keys = Object.entries(props).map(([key, value]) => keys.concat(key));
    return keys;
}

const MovieComments = (props) => {
    
    return (
        <div>
            Oceny i komentarze do filmu:
            {makeKeysArray(props.movieComments).map((key, index) => {
                return (
                    <div key={[key[0]]}>
                        <p>Komentarz {Number([index]) + 1}</p>
                        <p>Ocena użytkownika: {props.movieComments[key[0]].mark}</p>
                        <p>Komentarz użytkownika: {props.movieComments[key[0]].desc}</p>
                        <p>Autor/ka komentarza: {props.movieComments[key[0]].name}</p>
                        <p>E-mail użytkownika: {props.movieComments[key[0]].email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieComments;

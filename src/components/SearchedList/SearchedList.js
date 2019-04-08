import React from 'react'


const SearchedList = (props) => {
    return (
        <div>
            {JSON.stringify(props.movies)}
        </div>
    )
}

export default SearchedList
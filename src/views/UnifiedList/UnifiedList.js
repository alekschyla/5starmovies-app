import React from 'react';

import SearchedList from "../../components/SearchedList";

import { connect } from 'react-redux';

class UnifiedList extends React.Component {
    componentDidMount() {
        this.props._getList();
    }

    render() {
        return (
            <div>
                <SearchedList
                    movies={this.props._list}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    _list: state.movieList[ownProps.nameOfMovieList],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    _getList: () => dispatch(ownProps.actionCreator()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UnifiedList);
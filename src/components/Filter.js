import React from 'react';
import { connect } from 'react-redux';
import FilterLink from './FilterLink'


const Filter = () => {
    return (
        <div>
            Show: {' '}
            <FilterLink filter="SHOW_ALL" text="All"/>{' '}
            <FilterLink filter="SHOW_ACTIVE" text="Active"/>{' '}
            <FilterLink filter="SHOW_COMPLETED" text="Completed"/>{' '}
        </div>
    )
};

const mapStateToProps = (state) => {

    return{}
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
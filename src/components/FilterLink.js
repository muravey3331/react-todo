import React from 'react';
import {connect} from 'react-redux';

const FilterLink = ({onFilterLink, filter, text, activeFilter}) => {
    const handleFilterLink = (e) => {
        e.preventDefault();
        onFilterLink(filter);
    };
    return (activeFilter === filter) ?
        (<span className="filter__link active">{text}</span>) :
        (<span className="filter__link"
               onClick={handleFilterLink}>{text}</span>)

};

const mapStateToProps = (state) => {
    return {
        activeFilter: state.card.activeFilter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterLink: (filter) => {
            dispatch({type: filter})
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
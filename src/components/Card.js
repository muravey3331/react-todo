import React from 'react';
import { connect } from 'react-redux';

import TaskList from './TaskList';
import Input from './Input';
import Filter from './Filter';

const Card = ({card}) => {

    return (
        <div className="card">
            <h1>{card.name}</h1>
            <p>{card.description}</p>
            <Filter />
            <TaskList />
            <Input />
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        card: state.card
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
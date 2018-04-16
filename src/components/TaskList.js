import React from 'react';
import {connect} from 'react-redux';

import Task from './Task';

const TaskList = ({tasks}) => {
    return (
        <ul>
            {tasks.map((task, index) => {
                return (
                    <li key={index}>
                        <Task taskName={task.name} id={task.id} status={task.done} isEditing={task.isEditing}/>
                    </li>
                );
            })}
        </ul>
    )

};

const mapStateToProps = (state) => {
    switch (state.card.activeFilter) {
        case 'SHOW_ALL':
            return {
                tasks: state.card.tasks
            };
        case 'SHOW_ACTIVE':
            return {
                tasks: state.card.tasks.filter(t => !t.done)
            };
        case 'SHOW_COMPLETED':
            return {
                tasks: state.card.tasks.filter(t => t.done)
            };
        default:
            return {
                tasks: state.card.tasks
            }
    }

};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
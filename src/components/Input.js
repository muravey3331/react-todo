import React from 'react';
import {connect} from 'react-redux'

const Input = ({onAddTask}) => {

    const handleAddTask = (e) => {
        e.preventDefault();
        if (this.taskName.value === '') return;
        onAddTask(this.taskName.value);
        this.taskName.value = '';
    };

    return (
        <form onSubmit={handleAddTask}>
            <input className="add-field"
                   type="text"
                   ref={input => this.taskName = input}
                   placeholder="add new task"/>
        </form>
    )
};

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTask: (name) => {
            const payload = {
                id: Date.now().toString(),
                name,
                done: false
            };
            dispatch({type: "ADD_TASK", payload})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);

import {combineReducers} from 'redux';
import card from './card';

export const initialState = {
    editingElem: null,
    name: 'My first React ToDo ',
    description: 'card description',
    activeFilter: 'SHOW_ALL',
    tasks:[
        {
            id:1,
            name: 'Learn ReactJS',
            done: true,
            isEditing: false
        },
        {
            id:2,
            name: 'Learn Redux',
            done: true,
            isEditing: false
        },
        {
            id:3,
            name: 'Learn NodeJS',
            done: false,
            isEditing: false
        },{
            id:4,
            name: 'Learn HTML5',
            done: true,
            isEditing: false
        },
        {
            id:5,
            name: 'Learn CSS3',
            done: true,
            isEditing: false
        },
        {
            id:6,
            name: 'Learn JavaScript',
            done: false,
            isEditing: false
        }

    ]
};

export default combineReducers(
    {
        card
    }
);
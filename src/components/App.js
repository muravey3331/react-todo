import React, {Component} from 'react';
import {connect} from 'react-redux'

import Card from './Card';


class App extends Component {

    render(){
        return (
               <Card />
        )
    };
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


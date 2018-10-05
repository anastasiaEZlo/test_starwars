import React, {Component} from 'react';
import '../assets/App.css';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from '../reducers'
import Movies from "./Movies";
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <Movies/>
                </div>
            </Provider>
        );
    }
}

export default App;

import React, {Component} from 'react';
import '../assets/App.scss';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from '../reducers'
import Movies from "../containers/Movies";
import thunkMiddleware from 'redux-thunk'
import "typeface-oswald";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <div className='logo' />
                    <Movies/>
                </div>
            </Provider>
        );
    }
}

export default App;

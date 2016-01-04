import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store';
import {ReduxRouter} from 'redux-router';
import routes from '../routing';

const store = configureStore();

export default React.createClass({
    render() {
        return (
            <div>
                <Provider store={store}>
                    <ReduxRouter children={routes}/>
                </Provider>
            </div>
        );
    }
});
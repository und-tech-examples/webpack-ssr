import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

if(process.env.CLIENT_ENV) {
    ReactDOM.render(<App/>, document.getElementById("root"));
} else {
    ReactDOM.hydrate(<App/>, document.getElementById("root"));
}


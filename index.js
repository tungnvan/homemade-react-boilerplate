import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';

function importAll(r) {
    r.keys().forEach(r);
}
importAll(require.context('./src', true, /\.scss$/));

ReactDOM.render(<App />, document.getElementById('root'));
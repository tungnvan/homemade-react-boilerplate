import React, {useState} from 'react';
import {hot} from 'react-hot-loader/root';

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="app">
            <h1>This is React Hooks!</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => {setCount(count + 1)}}>Click</button>
        </div>
    );
}

export default hot(App);
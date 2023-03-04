//react component App
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Slider } from './components/Slider';
import './stylesheets/App.css'; 

const App = () => {
    return (
        <div className="App">
            <Slider children={["","","","",""]} />
        </div>
    )
}

export default App;
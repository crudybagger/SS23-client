//index.js of react app
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//use createRoot instead of render
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));

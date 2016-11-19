import React from 'react';
import ReactDOM from 'react-dom';
import Data from './data/data.js';
import App from './components/app.js';


ReactDOM.render( <App data={Data}  />  , document.getElementById("container"));
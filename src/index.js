import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

/* React Dom will render the app component inside our root */
ReactDom.render(<App/>,document.querySelector('#root'));
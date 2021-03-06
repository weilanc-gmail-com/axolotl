import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import { render } from 'react-dom'
import App from  './App.jsx'

render(
    <Router>
        <App />
        
    </Router>, 
    document.getElementById("root")
)
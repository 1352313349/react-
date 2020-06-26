import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"

import storage from "./utils/storage"
import localStorage from "./utils/locallStorage"


import App from './App';
import * as serviceWorker from './serviceWorker';

const user =localStorage.getUser()
storage.user=user

ReactDOM.render(
  <Router>
    <App />

  </Router>,
  document.getElementById('root')
);


serviceWorker.unregister();

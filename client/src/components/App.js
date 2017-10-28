import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Login from './Login';
import Signup from './Signup';
import NotFoundPage from './NotFoundPage';
import Landing from './Landing';

import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';

export const history = createHistory();

class App extends Component {

     render(){ 
      return (
        <BrowserRouter>
          <div>
            <Switch>
              <PublicRoute exact={true} path='/' component={Login} />
              <PublicRoute exact={true} path ='/signup/' component={Signup}/>
              <PrivateRoute exact={true} path='/landing' component={Landing} />
              <Route path='*' component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}


export default App;
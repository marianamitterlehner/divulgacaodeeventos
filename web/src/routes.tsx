import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login';
import RegisterEvent from './Pages/RegisterEvent';
import RegisterUser from './Pages//RegisterUser';
 
function Routes() {
    return(
        <BrowserRouter>
            <Route path='/' component={Login} exact />
            <Route path='/register-event' component={RegisterEvent} />
            <Route path='/register-user' component={RegisterUser} />
        </BrowserRouter>
    )
}

export default Routes;
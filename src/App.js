import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './Containers/PrivateRoute';

import Signup from './components/Forms/Signup';
import SignIn from './components/Forms/SignIn';
import Home from './Containers/Home';
import ForgotPassword from './components/Forms/ForgotPassword';
import UpdateProfile from './Containers/UpdateProfile';

import classes from './App.module.css';

export default function App() {

    return (
        <div className={classes.Background}>
            <Switch>
                <PrivateRoute path='/' exact component={Home} />
                <PrivateRoute path='/update-profile' component={UpdateProfile} />
                <Route path='/Signin' component={SignIn} />
                <Route path='/Signup' component={Signup} />
                <Route path='/forgot-password' component={ForgotPassword} />
            </Switch>
        </div>
    );
}

// function App() {
//     return (
//         <div className={classes.Background}><Signup /></div>
//     );
// }

// export default App;
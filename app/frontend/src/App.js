import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/forms/LoginForm';
import SignUpForm from './components/forms/SignUpForm';
import UserList from './components/UsersList';
import SplashPage from './components/home/SplashPage';
import UserPage from './components/home/UserPage';
import AuthRoute from './components/AuthRoute';


function App() {

    useEffect(() => {
        const getCSRF = async () => {
            const res = await fetch('/api/session/csrf');
            if (res.ok) {
                return;
            }
        }
        getCSRF();
    }, []);



    return (
        <BrowserRouter>
            <Switch>
                <Route path="/users">
                    <UserList />
                </Route>
                <Route path='/login'>
                    <LoginForm />
                </Route>
                <Route path='/signup'>
                    <SignUpForm />
                </Route>
                <AuthRoute path='/' component={UserPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

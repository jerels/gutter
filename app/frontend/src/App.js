import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import LoginForm from './components/forms/LoginForm';
import SignUpForm from './components/forms/SignUpForm';
import UserList from './components/UsersList';
import SplashPage from './components/home/SplashPage';


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
            <nav>
                <ul>
                    <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                </ul>
            </nav>
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
                <Route path="/">
                    <SplashPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

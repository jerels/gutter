import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import SplashPage from './home/SplashPage';

const AuthRoute = ({ user, path, component }) => {
    if (!user) {
        return <SplashPage />;
    }

    return (
        <>
            <Route path={path} component={component} />
            {path === '/' ? <Redirect to='/user' /> : <></>}
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    const { session: { user } } = state;
    return { user: user, ...ownProps };
}

export default connect(mapStateToProps)(AuthRoute);
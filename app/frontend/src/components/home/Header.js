import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginForm from '../forms/LoginForm';
import LogoutButton from '../forms/LogoutButton';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: '#492742'
    }
}));


const Header = () => {
    const classes = useStyles();
    const user = useSelector(state => state.session.user);
    return (
        <div className={classes.root}>
            <AppBar className={classes.header} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        The Gutter
                    </Typography>
                    {user ? <LogoutButton /> : <LoginForm />}
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Header;
import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSignUpModal } from '../../store/entities/ui';
import Header from './Header';
import Footer from './Footer';
import SignUpForm from '../forms/SignUpForm';


const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        backgroundColor: '#A2E0DB'
    },
    footer: {
        marginTop: theme.spacing(66)
    },
    signup: {
        marginLeft: theme.spacing(20),
        marginTop: theme.spacing(20)
    }
}));

const SplashPage = () => {
    const dispatch = useDispatch();
    const signUpModal = useSelector(state => state.entities.ui.signUpModal);
    const classes = useStyles();

    const handleSignUpModal = () => {
        dispatch(toggleSignUpModal());
    }

    return (
        <div className={classes.root}>
            {signUpModal ? <SignUpForm /> : <></>}
            <Grid container direction='column'>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item>
                    <img alt='' src='../../../images/original.jpg' />
                </Grid>
                <Grid container item>
                    <Grid item xs={1} />
                    <Grid className={classes.signup} item xs={5} justify='center' alignItems='center' direction='column'>
                        <Typography>
                            Join the Club!!
                        </Typography>
                        <Button onClick={handleSignUpModal}>Sign Up!</Button>
                    </Grid>
                    <Grid item>
                        Content
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
                <Grid className={classes.footer} item>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    )
}

export default SplashPage;
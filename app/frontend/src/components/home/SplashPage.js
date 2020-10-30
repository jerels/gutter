import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Header from './Header';
import ComicCarousel from './ComicCarousel';
import Footer from './Footer';
import SignUpForm from '../forms/SignUpForm';
import { makeStyles } from '@material-ui/core/styles';

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
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction='column'>
                <Grid item>
                    <Header />
                </Grid>
                <Grid container item>
                    <Grid item xs={1} />
                    <Grid className={classes.signup} item xs={5} justify='center' alignItems='center' direction='column'>
                        <Typography>
                            Sign Up
                        </Typography>
                        <SignUpForm />
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
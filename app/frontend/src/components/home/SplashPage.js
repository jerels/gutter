import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';
import ComicCarousel from './ComicCarousel';
import Footer from './Footer';
import SignUpForm from '../forms/SignUpForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
    },
    splash: {
    },
    carousel: {
        minHeight: '50vh'
    }
}));

const SplashPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid className={classes.splash} container direction='column'>
                <Grid item>
                    <Header />
                </Grid>
                <Grid container item>
                    <Grid item xs={1} />
                    <Grid item>
                        <ComicCarousel />
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
                <Grid container item>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <SignUpForm />
                    </Grid>
                    <Grid item xs={5}>
                        Content
                </Grid>
                    <Grid item xs={1} />
                </Grid>
                <Grid item>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    )
}

export default SplashPage;
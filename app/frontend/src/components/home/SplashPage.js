import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';
import ComicCarousel from './ComicCarousel';
import Footer from './Footer';

const SplashPage = () => {
    return (
        <Grid container direction='column'>
            <Grid item>
                <Header />
            </Grid>
            <Grid container item>
                <Grid item xs='1' />
                <Grid item xs='10'>
                    <ComicCarousel />
                </Grid>
                <Grid item xs='1' />
            </Grid>
            <Grid item>
                Content
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    )
}

export default SplashPage;
import React from 'react';
import { Grid, Typography, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSignUpModal } from '../../store/entities/ui';
import Header from './Header';
import Footer from './Footer';
import SignUpForm from '../forms/SignUpForm';

const signupImage = 'https://www.onlygfx.com/wp-content/uploads/2017/01/comic-explosion-bubble-5.png'
const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        backgroundColor: '#A2E0DB'
    },
    footer: {

    },
    signup: {
        marginTop: theme.spacing(20)
    },
    signupPaper: {
        width: '560px',
        height: '304px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupDiv: {
        display: 'flex',
        flexDirection: 'column'
    },
    signupButton: {
        top: '25px',
        marginBottom: '27px'
    },
    flavorText: {
        width: '517px',
        position: 'relative',
        bottom: '91px'
    },
    headerImage: {
        width: '100%'
    },
    middleContent: {
        justifyContent: 'center',
        alignItems: 'baseline'
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
                    <img className={classes.headerImage} alt='' src='https://i.pinimg.com/originals/ba/6a/0f/ba6a0f62a273aeaec8bfd7107933e632.jpg'></img>
                </Grid>
                <Grid container item className={classes.middleContent}>
                    <Grid item xs={1} />
                    <Grid className={classes.signup} item xs={5} justify='center' alignItems='center' direction='column'>
                        <Paper square='true' elevation={3} className={classes.signupPaper}>
                            <div className={classes.signupDiv}>
                                <Typography variant='h2'>
                                    Join the Club!!
                                </Typography>
                                <Button className={classes.signupButton} variant='contained' size='large' color='primary' onClick={handleSignUpModal}>Sign Up!</Button>
                                <Button className={classes.signupButton} variant='contained' size='large' color='secondary' onClick={handleSignUpModal}>Demo</Button>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.flavorText}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at. Urna porttitor rhoncus dolor purus non. Vulputate eu scelerisque felis imperdiet proin. Ac placerat vestibulum lectus mauris ultrices eros. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Eget aliquet nibh praesent tristique magna sit amet. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. In arcu cursus euismod quis viverra nibh cras pulvinar. A cras semper auctor neque vitae tempus quam pellentesque nec. Sem nulla pharetra diam sit amet nisl suscipit. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Ornare lectus sit amet est placerat in egestas erat imperdiet. Quam vulputate dignissim suspendisse in.
                        </Typography>
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
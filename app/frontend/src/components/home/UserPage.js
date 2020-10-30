import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ComicGrid from './ComicGrid';
import UserBar from './UserBar';
import Header from './Header';
import Footer from './Footer';
import FollowBar from './FollowBar';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    user: {
        marginBottom: theme.spacing(100),
    },
    root: {
        minHeight: '100vh'
    },
    header: {
    }
}))


const UserPage = ({ userIssues }) => {
    const user = useSelector(state => state.entities.users);
    const issues = useSelector(state => state.entities.issues);
    const classes = useStyles();
    console.log(userIssues);
    console.log(user.issues);
    console.log(issues);
    return (
        <Grid className={classes.root} justify="flex-start" container direction='column'>
            <Grid className={classes.header} item>
                <Header />
            </Grid>
            <Grid className={classes.user} container item justify="center" alignItems="flex-start">
                <UserBar props={user.username} />
                <ComicGrid />
                <FollowBar />
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    )
};


const mapStateToProps = (state, ownProps) => {
    return {
        userIssues: state.entities.issues
    };
}

export default connect(mapStateToProps)(UserPage);
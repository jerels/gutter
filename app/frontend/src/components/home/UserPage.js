import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { getComics } from '../../store/entities/issues';
import ComicGrid from './ComicGrid';
import UserBar from './UserBar';
import Header from './Header';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    }
}))


const UserPage = ({ userIssues }) => {
    const user = useSelector(state => state.entities.users);
    const issues = useSelector(state => state.entities.issues);
    const dispatch = useDispatch();
    const classes = useStyles();
    console.log(userIssues);
    console.log(user.issues);
    console.log(issues);
    return (
        <Grid container direction='column'>
            <Grid item>
                <Header />
            </Grid>
            <Grid container item justify="center" alignItems="center">
                <UserBar props={user.username} />
                <ComicGrid />
                <Grid item xs={4}></Grid>
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
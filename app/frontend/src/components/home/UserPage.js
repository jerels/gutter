import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';
import { getComics } from '../../store/entities/issues';
import ComicGrid from './ComicGrid';



const UserPage = ({ userIssues }) => {
    const user = useSelector(state => state.entities.users);
    const issues = useSelector(state => state.entities.issues);
    const dispatch = useDispatch();
    console.log(userIssues);
    console.log(user.issues);
    console.log(issues);
    return (
        <Grid container justify="center" alignItems="center">
            <Grid item xs={4}></Grid>
            <ComicGrid />
            <Grid item xs={4}></Grid>
        </Grid>
    )
};


const mapStateToProps = (state, ownProps) => {
    return {
        userIssues: state.entities.issues
    };
}

export default connect(mapStateToProps)(UserPage);
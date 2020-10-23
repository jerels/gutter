import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';
import { getComics } from '../../store/entities/issues';
import ComicGrid from './ComicGrid';



const UserPage = ({ issues, userIssues }) => {

    const dispatch = useDispatch();
    console.log(userIssues)
    useEffect(() => {
        const getIssues = async () => {
            await dispatch(getComics(userIssues))
        }
        getIssues();
    }, [userIssues])
    console.log(issues);
    return (
        <Grid container justify="center" alignItems="center">
            <Grid item xs={4}></Grid>
            <ComicGrid issues={issues} />
            <Grid item xs={4}></Grid>
        </Grid>
    )
};


const mapStateToProps = (state, ownProps) => {
    return {
        userIssues: state.entities.users,
        issues: state.entities.issues
    };
}

export default connect(mapStateToProps)(UserPage);
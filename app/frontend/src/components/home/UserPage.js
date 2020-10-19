import React from 'react';
import { Grid, Paper } from '@material-ui/core'

const UserPage = () => {
    return (
        <Grid container justify="center" alignItems="center">
            <Grid item xs={4}></Grid>
            <Grid container item xs={4}>
                <Paper />
                <Paper />
                <Paper />
            </Grid>
            <Grid item xs={4}></Grid>
        </Grid>
    )
}

export default UserPage;
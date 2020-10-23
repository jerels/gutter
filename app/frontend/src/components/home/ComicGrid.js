import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ComicCard from './ComicCard';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 225,
        width: 150,
    },
    control: {
        padding: theme.spacing(2),
    },
}));


const ComicGrid = ({ issues }) => {

    const classes = useStyles();
    console.log(issues);
    return (
        <Grid container className={classes.root} spacing={2} item xs={4}>
            {issues.map(issue => (
                <Grid key={issue.marvelId} item>
                    <ComicCard cover={issue.cover} />
                </Grid>
            ))}
        </Grid>
    )
}


export default ComicGrid;
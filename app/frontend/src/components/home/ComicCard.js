import React from 'react';
import { Paper } from '@material-ui/core';
import { useStyles } from './ComicGrid';


const ComicCard = ({ cover }) => {
    const classes = useStyles();
    console.log(cover);
    return (
        <Paper className={classes.paper} square>
            <img src={cover} />
        </Paper>
    )
}

export default ComicCard;
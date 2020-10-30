import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import ComicCard from './ComicCard';
import { useSelector, useDispatch } from 'react-redux';
import { deleteComic } from '../../store/entities/issues';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: theme.spacing(1)
    },
    paper: {
        height: 225,
        width: 150,
        elevation: 4
    },
    grid: {
        marginTop: theme.spacing(5)
    }
}));


const ComicGrid = () => {
    const userIssues = useSelector(state => state.entities.users.issues);
    const userId = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleDelete = marvelId => {
        return async function (e) {
            e.preventDefault();
            await dispatch(deleteComic(userId, marvelId));
            return;
        }
    }

    return (
        <Grid container className={classes.root} spacing={2} item xs={4}>
            {userIssues.map(issue => (
                <Grid className={classes.grid} key={issue.marvelId} item>
                    <ComicCard cover={issue.cover} />
                    <IconButton onClick={handleDelete(issue.marvelId)} color="primary" aria-label="upload picture" component="span">
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            ))}
        </Grid>
    )
}


export default ComicGrid;
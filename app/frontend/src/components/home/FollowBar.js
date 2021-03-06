import React from 'react';
import { Grid, IconButton, Avatar, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useSelector, useDispatch } from 'react-redux';
import ComicCard from './ComicCard';
import { addToCollection } from '../../store/entities/issues';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(1),
    },
    title: {
        marginBottom: theme.spacing(1)
    }
}))

const FollowBar = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const followed = useSelector(state => state.entities.users.followed);
    const userId = useSelector(state => state.session.user);

    const handleAdd = marvelId => {
        return async function (e) {
            e.preventDefault();
            await dispatch(addToCollection(userId, marvelId));
            return;
        }
    }

    return (
        <Grid className={classes.root} container spacing={2} item xs={4} direction='column'>
            <Typography className={classes.title}>your friends are reading...</Typography>
            {followed.map(follow => (
                <Grid key={follow.id} item>
                    <ComicCard cover={follow.issues[0].cover} />
                    <Avatar alt={follow.username} src={'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'} />
                    <IconButton onClick={handleAdd(follow.issues[0].marvelId)} color="primary" aria-label="upload picture" component="span">
                        <AddCircleIcon />
                    </IconButton>
                </Grid>
            ))}
        </Grid>
    )
};

export default FollowBar;
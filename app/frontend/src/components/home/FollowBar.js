import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import ComicCard from './ComicCard';


const FollowBar = () => {
    const dispatch = useDispatch();
    const followed = useSelector(state => state.entities.users.followed);

    return (
        <Grid container spacing={2} item xs={4} direction='column'>
            {followed.map(follow => (
                <Grid key={follow.id} item>
                    <ComicCard cover={follow.issues[0].cover} />
                </Grid>
            ))}
        </Grid>
    )
};

export default FollowBar;
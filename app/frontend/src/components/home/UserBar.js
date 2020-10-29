import React from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    }
}));

const UserBar = ({ username }) => {
    const classes = useStyles();
    console.log(username);
    return (
        <Grid container item xs={4} direction='column' justify="center" alignItems="center">
            <Avatar className={classes.avatar} alt={username} src={'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'} />
            <Typography>
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Morbi leo urna molestie at elementum eu facilisis sed odio. Amet risus nullam eget felis eget nunc. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.'
                </Typography>
        </Grid>
    )
};


export default UserBar;
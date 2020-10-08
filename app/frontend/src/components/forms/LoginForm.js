import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { login } from '../../store/session/session';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '20ch'
        },
        '& .MuiButton-root': {
            margin: 15
        }
    },

}));

const LoginForm = ({ history }) => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        setErrors([]);
    }, [emailOrUsername, password]);

    const handleSubmit = async e => {
        e.preventDefault();

        const res = await dispatch(login(emailOrUsername, password));
        if (res.ok) {
            history.replace('/');
            return;
        }

        setErrors(res.data.errors);
    };

    const onEmailOrUsernameChange = e => {
        setEmailOrUsername(e.target.value);
    };

    const onPasswordChange = e => {
        setPassword(e.target.value);
    };

    return (
        <form method="" action="" className={classes.root} onSubmit={handleSubmit}>
            <TextField required size='small' label="Email/Username" type="text" variant='filled' name="email_or_username" value={emailOrUsername} onChange={onEmailOrUsernameChange} />
            <TextField required size='small' label="Password" type="password" variant='filled' name="password" value={password} onChange={onPasswordChange} />
            {errors.length ?
                <ul>
                    {errors.map((error, i) => <li key={`error-${i + 1}`}>{error}</li>)}
                </ul>
                : <></>}
            <Button type='submit' color="inherit">Login</Button>
        </form>
    )
};

export default withRouter(LoginForm);
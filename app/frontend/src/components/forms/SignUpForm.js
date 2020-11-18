import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { signUp } from '../../store/entities/users';
import { login } from '../../store/session/session';

const useStyles = makeStyles(theme => ({
    form: {
        backgroundColor: 'cornsilk',
        width: '300px',
        height: '257px',
        position: 'absolute',
        top: '282px',
        left: '596px',
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center'
    },
}))

const SignUpForm = ({ history }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        setErrors([]);
    }, [email, username, password]);

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await dispatch(signUp(username, email, password));
        if (res.ok) {
            await dispatch(login(username, password));
            history.replace('/user');
            setErrors(res.data.errors);
            return;
        }
    };

    const onUsernameChange = e => {
        setUsername(e.target.value);
    };

    const onEmailChange = e => {
        setEmail(e.target.value);
    };

    const onPasswordChange = e => {
        setPassword(e.target.value);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div>
                <div>
                    <TextField name="username" type="text" value={username} onChange={onUsernameChange} label='Username' />
                </div>
                <div>
                    <TextField name="email" type="email" value={email} onChange={onEmailChange} label='Email' />
                </div>
                <div>
                    <TextField name="password" type="password" value={password} onChange={onPasswordChange} label='Password' />
                </div>
                <div>
                    {errors.length ?
                        <ul>
                            {errors.map((error, i) => <li key={`error-${i + 1}`}>{error}</li>)}
                        </ul>
                        : <></>}
                </div>
                <Button type="submit">Continue</Button>
            </div>
        </form>
    )
};

export default withRouter(SignUpForm);
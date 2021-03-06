import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { signUp } from '../../store/entities/users';
import { login } from '../../store/session/session';
import { toggleSignUpModal } from '../../store/entities/ui';

const useStyles = makeStyles(theme => ({
    formPaper: {
        backgroundColor: 'cornsilk',
        width: '300px',
        height: '317px',
        position: 'absolute',
        top: '250px',
        left: '700px',
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center'
    },
    formContainer: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(133, 133, 133, 0.5)'
    },
    form: {
        marginTop: '-50px'
    },
    formButton: {
        left: '24px',
        top: '15px',
    }
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

    const handleSignUpModal = () => {
        dispatch(toggleSignUpModal());
    }

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
        <>
            <div onClick={handleSignUpModal} className={classes.formContainer} />
            <Paper className={classes.formPaper}>
                <Typography>Sign Up</Typography>
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
                        <Button className={classes.formButton} type="submit" variant="contained">Come on in...</Button>
                    </div>
                </form>
            </Paper>
        </>

    )
};

export default withRouter(SignUpForm);
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/entities/users';
import { login } from '../../store/session/session';


const SignUpForm = ({ history }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        setErrors([]);
    }, [email, username, password]);

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await dispatch(signUp(username, email, password));
        if (res.ok) {
            await dispatch(login(username, password));
            history.replace('/');
            return;
        }
        setErrors(res.data.errors);
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
        <form onSubmit={handleSubmit}>
            <input name="username" type="text" value={username} onChange={onUsernameChange} className="auth_input" placeholder='Username' />
            <input name="email" type="email" value={email} onChange={onEmailChange} className="auth_input" placeholder='Email' />
            <input name="password" type="password" value={password} onChange={onPasswordChange} className="auth_input" placeholder='Password' />
            <div className="login_form_error_container" >
                {errors.length ?
                    <ul className="auth_error_list">
                        {errors.map((error, i) => <li className="error_message" key={`error-${i + 1}`}>{error}</li>)}
                    </ul>
                    : <></>}
            </div>
            <button type="submit" className="auth_button">Continue</button>
        </form>
    )
};

export default SignUpForm;
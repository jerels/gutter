import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../store/session/session';


const LoginForm = ({ history }) => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
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
        <form method="" action="" onSubmit={handleSubmit}>
            <div>
                <input placeholder="Email or Username" type="text" name="email_or_username" value={emailOrUsername} className="auth_input" onChange={onEmailOrUsernameChange} />
            </div>

            <div>
                <input placeholder="Password" type="password" name="password" value={password} className="auth_input" onChange={onPasswordChange} />
            </div>
            <div className="login_form_error_container">
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

export default withRouter(LoginForm);
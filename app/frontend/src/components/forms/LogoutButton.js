import React from 'react';
import { Avatar, ButtonBase } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session/session';


const LogoutButton = () => {
    const dispatch = useDispatch();
    const handleLogout = async e => {
        e.preventDefault();
        await dispatch(logout());
        return;
    }

    return (
        <ButtonBase onClick={handleLogout}>
            <Avatar src={'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'} />
        </ButtonBase>
    )
};

export default LogoutButton;
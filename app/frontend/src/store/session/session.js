import Cookies from 'js-cookie';
import { setUser } from '../entities/users';

const SET_SESSION = 'session/SET_SESSION';

export const setSession = user => {
    return {
        type: SET_SESSION,
        user
    }
};

export const login = (emailOrUsername, password) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');

    return async dispatch => {
        const res = await fetch('/api/session/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ emailOrUsername, password, 'csrf_token': csrfToken })
        });
        res.data = await res.json();
        console.log(res.data)
        if (res.ok) {
            dispatch(setSession(res.data.user.id));
            dispatch(setUser(res.data.user))
        }
        return res;
    }
};

const initState = {
    user: null
};

export default function sessionReducer(state = initState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_SESSION:
            newState.user = action.user;
            return newState;
        default:
            return state;
    }
};
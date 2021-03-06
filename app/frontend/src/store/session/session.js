import Cookies from 'js-cookie';
import { setUser } from '../entities/users';
import { getComics } from '../entities/issues';

const SET_SESSION = 'session/SET_SESSION';
const LOGOUT_USER = 'session/LOGOUT_USER';

export const setSession = user => {
    return {
        type: SET_SESSION,
        user
    }
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
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
        debugger
        console.log(res.data.user)
        if (res.ok) {
            dispatch(setUser(res.data.user));
            dispatch(getComics(res.data.user.issues));
            debugger;
            dispatch(setSession(res.data.user.id));
        }
        return res;
    }
};

export const logout = () => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    return async dispatch => {
        const res = await fetch('/api/session/logout', {
            method: 'delete',
            headers: {
                'X-CSRFTOKEN': csrfToken
            }
        });
        res.data = await res.json();
        if (res.ok) {
            dispatch(logoutUser());
        }
        return res;
    }
}

const initState = {
    user: null
};

export default function sessionReducer(state = initState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_SESSION:
            newState.user = action.user;
            return newState;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
};
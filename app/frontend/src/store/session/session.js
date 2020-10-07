import Cookies from 'js-cookie';

const SET_USER = 'session/SET_USER';

export const setUser = user => {
    return {
        type: SET_USER,
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

        if (res.ok) {
            dispatch(setUser(res.data.userId));
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
        case SET_USER:
            newState.user = action.user;
            return newState;
        default:
            return state;
    }
};
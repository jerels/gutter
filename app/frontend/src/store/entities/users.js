import Cookies from 'js-cookie';

const SET_USER = 'users/SET_USER';

const setUser = user => {
    return {
        type: SET_USER,
        user
    }
};

export const signUp = (username, email, password) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');

    return async dispatch => {
        const res = await fetch('/api/users/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ username, password, email, 'csrf_token': csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(setUser(data));
            return res;
        } else {
            console.error('Bad response');
            return res;
        }
    }
};

export default function usersReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return { [action.user.id]: action.user };
        default:
            return state;
    }
}
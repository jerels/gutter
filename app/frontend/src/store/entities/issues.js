import { setUser } from './users';

const SET_ISSUES = 'issues/SET_ISSUES';
const DELETE_ISSUE = 'issues/DELETE_ISSUE';

const setIssues = issues => {
    return {
        type: SET_ISSUES,
        issues
    }
};

const deleteIssue = issues => {
    return {
        type: DELETE_ISSUE,
        issues
    }
}

export const getComics = issueIds => {
    debugger
    return async dispatch => {
        const res = await fetch('/api/issues/', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'issues': issueIds })
        });
        debugger;
        const data = await res.json();
        res.data = data;
        console.log(res.data);
        if (res.ok) {
            dispatch(setIssues(res.data));
            return res;
        } else {
            console.error('Bad response');
            return res;
        }
    }
};

export const addToCollection = (userId, marvelId) => {
    return async dispatch => {
        const res = await fetch(`/api/issues/${userId}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ marvelId })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(setUser(res.data.user));
            return res;
        } else {
            console.error('Bad response');
            return res;
        }
    }
};

export const deleteComic = (userId, marvelId) => {
    return async dispatch => {
        const res = await fetch('/api/issues/', {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, marvelId })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(setUser(res.data.user));
            return res;
        } else {
            console.error('Bad response');
            return res;
        }
    }
};

export default function issuesReducer(state = {}, action) {
    switch (action.type) {
        case SET_ISSUES:
            return { ...action.issues, ...state }
        case DELETE_ISSUE:
            return { ...action.issues }
        default:
            return state
    }
}
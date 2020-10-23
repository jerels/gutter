

const SET_ISSUES = 'issues/SET_ISSUES';

const setIssues = issues => {
    return {
        type: SET_ISSUES,
        issues
    }
};

export const getComics = issueIds => {
    debugger
    return async dispatch => {
        const res = await fetch('/api/issues', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'issues': issueIds })
        })
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(setIssues(res.data));
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
        default:
            return state
    }
}
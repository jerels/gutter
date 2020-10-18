import Cookies from 'js-cookie';

const SET_ISSUES = 'issues/SET_ISSUES';

const setIssues = issues => {
    return {
        type: SET_ISSUES,
        issues
    }
};

export const getComics = issueIds => {

    return async dispatch => {
        const issues = issueIds.map(issueId => {
            const res = await fetch(`/api/issues/${issueId}`)
            const data = await res.json()
            res.data = data
            if (res.ok) {
                return data
            }
        });

        dispatch(setIssues(issues))
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
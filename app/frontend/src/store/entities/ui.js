const TOGGLE_SIGN_UP_MODAL = 'ui/TOGGLE_SIGN_UP_MODAL';

export const toggleSignUpModal = () => {
    return {
        type: TOGGLE_SIGN_UP_MODAL
    };
};

const initUiState = {
    signUpModal: false
};

export default function uiReducer(state = initUiState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case TOGGLE_SIGN_UP_MODAL:
            newState.signUpModal = !newState.signUpModal;
            return newState;
        default:
            return state;
    }
};
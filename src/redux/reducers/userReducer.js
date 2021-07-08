const SET_USER = "SET_USER";

const defaultState = {
    currentUser: {},
    isAuth: !!localStorage.getItem("token")
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: !state.isAuth
            }

        default:
            return state;
    }
}

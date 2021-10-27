import { authActions } from "../actions/authActions";

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case authActions.login:
            const {token} = action.payload
            return {token}
        case authActions.logout:
            return {token: null};
        default:
            return state;
    }
}

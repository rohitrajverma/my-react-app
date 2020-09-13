import { userActionTypes } from "../actions/user-actions";

const initialState = { user: null, error: null };

function userReducer(storeData = initialState, action) {

    switch (action.type) {
        case userActionTypes.SIGN_IN_SUCCESS:
            return { user: action.user, error: null }
        case userActionTypes.SIGN_IN_ERROR:
            return { user: null, error: action.error }
        case userActionTypes.SIGN_OUT:
            return initialState;
        default:
            return storeData;
    }

}
export default userReducer;
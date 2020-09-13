export const userActionTypes = {
    SIGN_IN_SUCCESS: '[User] Sign in success',
    SIGN_IN_ERROR: '[User] Sign in error',
    SIGN_OUT: '[User] Sign out'
}


export const signInSuccess = (user) => {
    return {
        type: userActionTypes.SIGN_IN_SUCCESS,
        user,
    }
}


export const signInError = (error) => {
    return {
        type: userActionTypes.SIGN_IN_ERROR,
        error,
    }
}


export const signOut = () => {
    return {
        type: userActionTypes.SIGN_OUT
    }
}
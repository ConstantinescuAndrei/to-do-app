export const signIn = (user) => {
    return {
        type: "SIGN_IN",
        payload: user
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}
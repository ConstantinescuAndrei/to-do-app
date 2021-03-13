const userReducer = (state = {
    firstName: '',
    lastName: '',
    username: '',
    email: ''
}, action) => {
    switch (action.type) {
        case "SIGN_IN": {
            state = {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                username: action.payload.username,
                email: action.payload.email
            }

            return state;
        }        

        case "LOGOUT": {
            state = {
                firstName: '',
                lastName: '',
                username: '',
                email: ''
            };

            return state;
        }

        default:
            return state;
    }    
}

export default userReducer;
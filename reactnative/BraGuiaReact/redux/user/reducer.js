const initialState = {
    currentUser: null,
};

const userReducer = (state = initialState, action) => {
    if (action.type === 'user/login'){
        return {currentUser: 10};
    }

    return state;
};

export default userReducer;


// import { SIGN_IN, SIGN_OUT, SIGN_UP, GOOGLE_AUTH } from './auth.type'
// const intialState = {};

// const authReducer = (state = intialState, action) => {
//     switch (action.type) {
//         case SIGN_IN:
//             return {
//                 ...state,
//                 ...action.payload,
//             };
//         case SIGN_UP:
//             return {
//                 ...state,
//                 ...action.payload,
//             };
//         case SIGN_OUT:
//             return {};
//         case GOOGLE_AUTH:
//             return {
//                 ...state,
//                 ...action.payload,
//             };
//         default:
//             return {
//                 ...state,
//             };
//     }
// }
// export default authReducer;


import { SIGN_IN, SIGN_OUT, SIGN_UP, GOOGLE_AUTH } from './auth.type';

const initialState = {
    user: {},
    isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
        case SIGN_UP:
        case GOOGLE_AUTH:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case SIGN_OUT:
            return {
                ...state,
                user: {},
                isAuthenticated: false,
            };
        default:
            return state;
    }
}

export default authReducer;

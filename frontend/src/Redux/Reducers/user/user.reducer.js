// import { GET_USER, SELF, CLEAR_USER } from "./user.type";

// const initialState = {
//     user: {},
// };

// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_USER:
//             return {
//                 ...state,
//             };
//         case SELF:
//             return {
//                 ...state,
//                 ...action.payload,
//             };
//         case CLEAR_USER:
//             return {
//                 user: {},
//             };
//         default:
//             return {
//                 ...state,
//             };
//     }
// };

// export default userReducer;


// user.reducer.js
import { GET_USER, SELF, CLEAR_USER } from "./user.type";

const initialState = {
    user: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case SELF:
            return {
                ...state,
                user: action.payload,
            };
        case CLEAR_USER:
            return {
                ...state,
                user: {},
            };
        default:
            return state;
    }
};

export default userReducer;

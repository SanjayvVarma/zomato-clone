// import { GET_REVIEW, POST_REVIEW } from "./review.type";

// const initialState = {
//     reviews: {
//         reviews: [],
//     },
// };

// const reviewReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_REVIEW:
//             return {
//                 ...state,
//                 reviews: action.payload,
//             };
//         case POST_REVIEW:
//             return {
//                 ...state,
//                 reviews: {
//                     reviews: [action.payload, ...state.reviews.reviews],
//                 },
//             };
//         default:
//             return {
//                 ...state,
//             };
//     }
// };

// export default reviewReducer;



// review.reducer.js
import { GET_REVIEW, POST_REVIEW, ERROR } from "./review.type";

const initialState = {
    reviews: [],
    error: null,
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEW:
            return {
                ...state,
                reviews: action.payload.reviews,
                error: null,
            };
        case POST_REVIEW:
            return {
                ...state,
                reviews: [action.payload, ...state.reviews],
                error: null,
            };
        case ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reviewReducer;

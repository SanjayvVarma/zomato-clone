// import { GET_IMAGE } from "./image.type";
// const initialState = {
//     images: [],
// };
// const imageReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_IMAGE:
//             return {
//                 ...state,
//                 ...action.payload,
//             };
//         default:
//             return {
//                 ...state,
//             };
//     }
// };
// export default imageReducer;


// image.reducer.js
import { GET_IMAGE, ERROR } from "./image.type";

const initialState = {
    images: [],
    error: null,
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMAGE:
            return {
                ...state,
                images: [...state.images, action.payload],
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

export default imageReducer;

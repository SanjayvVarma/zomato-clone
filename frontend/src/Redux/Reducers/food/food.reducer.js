// import { GET_FOOD_LIST } from "./food.type";

// const initialState = {
//     foodList: [],
// };

// const foodReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_FOOD_LIST: {
//             return {
//                 ...state,
//                 foodList: action.payload,
//             };
//         }
//         default:
//             return { ...state };
//     }
// };
// export default foodReducer;



// food.reducer.js
import { GET_FOOD, GET_FOOD_LIST, ERROR } from "./food.type";

const initialState = {
    foodList: [],
    foodItem: {},
    error: null,
};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FOOD_LIST: {
            return {
                ...state,
                foodList: action.payload,
            };
        }
        case GET_FOOD: {
            return {
                ...state,
                foodItem: action.payload,
            };
        }
        case ERROR: {
            return {
                ...state,
                error: action.payload,
            };
        }
        default:
            return state;
    }
};

export default foodReducer;

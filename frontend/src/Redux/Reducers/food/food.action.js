// import { GET_FOOD, GET_FOOD_LIST } from "./food.type";
// import axios from "axios";

// export const getFood = (foodId) => async (dispatch) => {
//     try {
//         const Food = await axios({
//             method: "GET",
//             url: `http://localhost:8080/food/${foodId}`,
//         });
//         return dispatch({ type: GET_FOOD, payload: Food.data });
//     } catch (error) {
//         dispatch({ type: "ERROR", payload: error });
//     }
// };
// export const getFoodList = (menuId) => async (dispatch) => {
//     try {
//         const Menu = await axios({
//             method: "GET",
//             url: `http://localhost:8080/menu/list/${menuId}`,
//         });
//         return dispatch({ type: GET_FOOD_LIST, payload: Menu.data });
//     } catch (error) {
//         dispatch({ type: "ERROR", payload: error });
//     }
// };


// food.actions.js
import { GET_FOOD, GET_FOOD_LIST, ERROR } from "./food.type";
import axios from "axios";

export const getFood = (foodId) => async (dispatch) => {
    try {
        const Food = await axios({
            method: "GET",
            url: `http://localhost:8080/food/${foodId}`,
        });
        return dispatch({ type: GET_FOOD, payload: Food.data });
    } catch (error) {
        dispatch({ type: ERROR, payload: error });
    }
};

export const getFoodList = (menuId) => async (dispatch) => {
    try {
        const Menu = await axios({
            method: "GET",
            url: `http://localhost:8080/menu/list/${menuId}`,
        });
        return dispatch({ type: GET_FOOD_LIST, payload: Menu.data });
    } catch (error) {
        dispatch({ type: ERROR, payload: error });
    }
};

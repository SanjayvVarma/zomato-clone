// import axios from "axios";
// // redux types
// import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

// export const getRestaurant = () => async (dispatch) => {
//     try {
//         const restaurantList = await axios({
//             method: "GET",
//             url: `http://localhost:8080/restaurant/?city=Mumbai`,
//         });
//         //console.log("getRestaurant", restaurantList.data);
//         return dispatch({
//             type: GET_RESTAURANT,
//             payload: restaurantList.data.restuarants,
//         });
//     } catch (error) {
//         return dispatch({ type: "ERROR", payload: error });
//     }
// };

// export const getSpecificRestaurant = (_id) => async (dispatch) => {
//     try {
//         const restaurantList = await axios({
//             method: "GET",
//             url: `http://localhost:8080/restaurant/${_id}`,
//         });
//         // console.log("getspecificrestaurant", restaurantList.data)
//         return dispatch({
//             type: GET_SPECIFIC_RESTAURANT,
//             payload: restaurantList.data.restuarant,
//         });
//     } catch (error) {
//         return dispatch({ type: "ERROR", payload: error });
//     }
// };



// restaurant.actions.js
import axios from "axios";
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT, ERROR } from "./restaurant.type";

export const getRestaurant = () => async (dispatch) => {
    try {
        const restaurantList = await axios({
            method: "GET",
            url: `http://localhost:8080/restaurant/?city=Mumbai`,
        });
        return dispatch({
            type: GET_RESTAURANT,
            payload: restaurantList.data.restaurants,
        });
    } catch (error) {
        return dispatch({ type: ERROR, payload: error });
    }
};

export const getSpecificRestaurant = (_id) => async (dispatch) => {
    try {
        const restaurant = await axios({
            method: "GET",
            url: `http://localhost:8080/restaurant/${_id}`,
        });
        return dispatch({
            type: GET_SPECIFIC_RESTAURANT,
            payload: restaurant.data.restaurant,
        });
    } catch (error) {
        return dispatch({ type: ERROR, payload: error });
    }
};

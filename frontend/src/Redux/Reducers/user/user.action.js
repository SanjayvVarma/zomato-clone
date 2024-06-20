// import { GET_USER, SELF, CLEAR_USER } from "./user.type";
// import axios from "axios";


// export const getUser = (_id) => async (dispatch) => {
//     try {
//         const User = await axios({
//             method: "GET",
//             url: `http://localhost:8080/user/${_id}`,
//         });

//         return dispatch({ type: GET_USER, payload: User.data });
//     } catch (error) {
//         return dispatch({ type: "ERROR", payload: error });
//     }
// };

// export const getMySelf = () => async (dispatch) => {
//     try {
//         const User = await axios({
//             method: "GET",
//             url: `http://localhost:8080/user/`,
//         });

//         //        console.log(User.data.user);

//         return dispatch({ type: SELF, payload: { ...User.data.user } });
//     } catch (error) {
//         return dispatch({ type: "ERROR", payload: error });
//     }
// };

// export const clearUser = () => async (dispatch) => {
//     try {
//         return dispatch({ type: CLEAR_USER, payload: {} });
//     } catch (error) {
//         return dispatch({ type: "ERROR", payload: error });
//     }
// };



// user.actions.js
import axios from "axios";
import { GET_USER, SELF, CLEAR_USER, ERROR } from "./user.type";

export const getUser = (_id) => async (dispatch) => {
    try {
        const user = await axios({
            method: "GET",
            url: `http://localhost:8080/user/${_id}`,
        });
        return dispatch({ type: GET_USER, payload: user.data });
    } catch (error) {
        return dispatch({ type: ERROR, payload: error });
    }
};

export const getMySelf = () => async (dispatch) => {
    try {
        const user = await axios({
            method: "GET",
            url: `http://localhost:8080/user/`,
        });
        return dispatch({ type: SELF, payload: user.data.user });
    } catch (error) {
        return dispatch({ type: ERROR, payload: error });
    }
};

export const clearUser = () => async (dispatch) => {
    try {
        return dispatch({ type: CLEAR_USER });
    } catch (error) {
        return dispatch({ type: ERROR, payload: error });
    }
};

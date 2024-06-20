import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleAuth } from "../Redux/Reducers/auth/auth.action";

const GoogleAuth = () => {
    const { token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            dispatch(googleAuth(token)).then(() => navigate("/delivery"));
        }
    }, []);
    return <>
        <div className="flex items-center justify-center">
            <img src="https://i.pinimg.com/originals/b0/70/1a/b0701aa6ae2a696e7caf2f4a57eef5e8.jpg" alt="Have A Nice Day" />
        </div>
    </>
}

export default GoogleAuth;



// import React, { useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { googleAuth } from "../Redux/Reducers/auth/auth.action";

// const GoogleAuth = () => {
//     const { token } = useParams();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const authenticateUser = async () => {
//             try {
//                 if (token) {
//                     await dispatch(googleAuth(token));
//                     navigate("/delivery");
//                 }
//             } catch (error) {
//                 // Handle error (e.g., display error message to the user)
//                 console.error("Google authentication error:", error);
//             }
//         };

//         authenticateUser();
//     }, [dispatch, googleAuth, token, navigate]);

//     return (
//         <div className="flex items-center justify-center h-screen">
//             <img
//                 src="https://i.pinimg.com/originals/b0/70/1a/b0701aa6ae2a696e7caf2f4a57eef5e8.jpg"
//                 alt="Have A Nice Day"
//                 className="max-w-full h-auto"
//             />
//         </div>
//     );
// };

// export default GoogleAuth;

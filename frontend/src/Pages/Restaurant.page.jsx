import React from 'react'
import { useParams, useLocation, Navigate } from "react-router-dom";
import { Outlet } from 'react-router-dom'

const Restaurant = () => {
    const { id } = useParams();
    const { pathname } = useLocation();

    if (`/restaurant/${id}` === pathname) {
        return <Navigate to={`/restaurant/${id}/overview`} />;
    }

    return (
        <>
            <Outlet />
        </>
    )
}

export default Restaurant;




// import React from 'react';
// import { useParams, useLocation, Navigate } from "react-router-dom";
// import { Outlet } from 'react-router-dom';

// const Restaurant = () => {
//     const { id } = useParams();  // Get the id parameter from the URL
//     const { pathname } = useLocation();  // Get the current pathname

//     // Check if the current pathname matches `/restaurant/${id}`
//     if (`/restaurant/${id}` === pathname) {
//         return <Navigate to={`/restaurant/${id}/overview`} />;  // Redirect to `/restaurant/${id}/overview`
//     }

//     // Render nested routes defined by child components
//     return (
//         <>
//             <Outlet />  {/* Render nested child routes */}
//         </>
//     )
// }

// export default Restaurant;

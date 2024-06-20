import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
//components
import Delivery from '../Components/Delivery';
import Dining from '../Components/Dining';
import NightLife from '../Components/NightLife';
import Nutrition from '../Components/Nutrition';
import HomeLayout from '../Layouts/Homepage.layout'
import { getRestaurant } from "../Redux/Reducers/restaurant/restaurant.action";

const Home = () => {
    const { type } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurant());
    }, []);

    return (
        <>
            <div className="my-5 mb-20 md:mb-10">
                {type === "delivery" && <Delivery />}
                {type === "dining" && <Dining />}
                {type === "night" && <NightLife />}
                {type === "nutrition" && <Nutrition />}
            </div>
        </>
    )
}

export default HomeLayout(Home);




// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams } from "react-router-dom";
// import Delivery from '../Components/Delivery';
// import Dining from '../Components/Dining';
// import NightLife from '../Components/NightLife';
// import Nutrition from '../Components/Nutrition';
// import HomeLayout from '../Layouts/Homepage.layout';
// import { getRestaurant } from "../Redux/Reducers/restaurant/restaurant.action";

// const Home = () => {
//     const { type } = useParams();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getRestaurant());
//     }, [dispatch]);

//     let sectionComponent;
//     switch (type) {
//         case "delivery":
//             sectionComponent = <Delivery />;
//             break;
//         case "dining":
//             sectionComponent = <Dining />;
//             break;
//         case "night":
//             sectionComponent = <NightLife />;
//             break;
//         case "nutrition":
//             sectionComponent = <Nutrition />;
//             break;
//         default:
//             sectionComponent = null;
//     }

//     return (
//         <>
//             <div className="my-5 mb-20 md:mb-10">
//                 {sectionComponent}
//             </div>
//         </>
//     )
// }

// export default HomeLayout(Home);

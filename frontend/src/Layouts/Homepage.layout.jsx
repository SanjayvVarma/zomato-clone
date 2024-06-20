// import React from 'react'
// import Navbar from '../Components/Navbar';
// import FoodTab from '../Components/FoodTab';

// const HomeLayout = (Component) => ({ ...props }) => {
//     return <>
//         <Navbar />
//         <FoodTab />
//         <div className='container mx-auto px-4 lg:px-20'>
//             <Component {...props} />
//         </div>
//     </>
// }
// export default HomeLayout



import React from 'react';
import Navbar from '../Components/Navbar';
import FoodTab from '../Components/FoodTab';
import Footer from '../Components/Footer/Footer';

const HomeLayout = (Component) => (props) => {
    return (
        <>
            <Navbar />
            <FoodTab />
            <div className='container mx-auto px-4 lg:px-20'>
                <Component {...props} />
            </div>
            <Footer/>
        </>
    );
};

export default HomeLayout;

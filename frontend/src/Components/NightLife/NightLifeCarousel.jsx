// import React, { useState } from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import  Navigation from "swiper";
// import PictureCarouselCard from '../PictureCarouselCard';

// const NightLifeCarousel = () => {

//     const [dining] = useState([
//         {
//             image:
//                 "https://b.zmtcdn.com/data/pictures/1/18983041/31109ef52f99ea794d705da5c706627a.jpg",
//             title: "Buzzing Nightlife & Clubs",
//             places: "4 Places",
//         },
//         {
//             image:
//                 "https://b.zmtcdn.com/data/pictures/0/303960/68e61bd2a5fe97adf587d30496d94cfe.png",
//             title: "Raasta",
//             places: "7 Places",
//         },
//         {
//             image:
//                 "https://b.zmtcdn.com/data/pictures/5/19577475/a9150506655136673058d180c8167d9c.jpeg",
//             title: "Barrel Mansion",
//             places: "2 Places",
//         },
//         {
//             image:
//                 "https://b.zmtcdn.com/data/pictures/1/19567911/f3e8a1376225dfd3cc32c605097973c0.jpg",
//             title: "Yeda Republic",
//             places: "4 Places",
//         },
//         {
//             image:
//                 "https://b.zmtcdn.com/data/pictures/0/309850/4c2cce1c16a40f515a27ecc27075259e.jpg",
//             title: "Pablo Mansion",
//             places: "6 Places",
//         },
//         {
//             image:
//                 "https://b.zmtcdn.com/data/pictures/2/312902/2e3a98229ef00de30a9c7ad867bc0d5a.png",
//             title: "Bombay Cocktal Bar",
//             places: "9 Places",
//         },
//     ]);

//     const slideConfig = {
//         slidesPerView: 1,
//         spaceBetween: 10,
//         pagination: {
//             clickable: true,
//         },
//         breakpoints: {
//             640: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//             },
//             768: {
//                 slidesPerView: 3,
//                 spaceBetween: 10,
//             },
//             1024: {
//                 slidesPerView: 4,
//                 spaceBetween: 0,
//             },
//         },
//         modules: [Navigation],
//         className: "diningSwiper",
//         navigation: true,
//     };
//     return (
//         <div className="w-full">
//             <Swiper {...slideConfig}>
//                 {dining.map((item, index) => (
//                     <SwiperSlide key={index}>
//                         <PictureCarouselCard {...item} />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     )
// }

// export default NightLifeCarousel





import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import PictureCarouselCard from '../PictureCarouselCard';
// import 'swiper/swiper-bundle.min.css';

const NightlifeCarousel = () => {
    const [dining] = useState([
        {
            image:
                'https://b.zmtcdn.com/data/pictures/1/18983041/31109ef52f99ea794d705da5c706627a.jpg',
            title: 'Buzzing Nightlife & Clubs',
            places: '4 Places',
        },
        {
            image:
                'https://b.zmtcdn.com/data/pictures/0/303960/68e61bd2a5fe97adf587d30496d94cfe.png',
            title: 'Raasta',
            places: '7 Places',
        },
        {
            image:
                'https://b.zmtcdn.com/data/pictures/5/19577475/a9150506655136673058d180c8167d9c.jpeg',
            title: 'Barrel Mansion',
            places: '2 Places',
        },
        {
            image:
                'https://b.zmtcdn.com/data/pictures/1/19567911/f3e8a1376225dfd3cc32c605097973c0.jpg',
            title: 'Yeda Republic',
            places: '4 Places',
        },
        {
            image:
                'https://b.zmtcdn.com/data/pictures/0/309850/4c2cce1c16a40f515a27ecc27075259e.jpg',
            title: 'Pablo Mansion',
            places: '6 Places',
        },
        {
            image:
                'https://b.zmtcdn.com/data/pictures/2/312902/2e3a98229ef00de30a9c7ad867bc0d5a.png',
            title: 'Bombay Cocktail Bar',
            places: '9 Places',
        },
    ]);

    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: true,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
        modules: [Navigation, Autoplay],
        className: 'mySwiper',
    };

    return (
        <div className="w-full">
            {dining.length > 0 && (
                <Swiper {...slideConfig}>
                    {dining.map((item, index) => (
                        <SwiperSlide key={index}>
                            <PictureCarouselCard {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default NightlifeCarousel;

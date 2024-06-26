import React from 'react'
import ReactStars from "react-rating-stars-component";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const NutritionCard = (props) => {
    return (
        <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            <div className="w-full h-full bg-white rounded-2xl drop-shadow-md">
                <div
                    className={`w-full p-4 h-72 md:h-56 lg:h-48 rounded-t-2xl bg-${props.bg}-100`}
                >
                    <img
                        src={props.image}
                        alt="suplements"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="p-3 flex flex-col gap-2">
                    <div className="flex mt-2 items-center gap-3 justify-between">
                        <div className='flex flex-row gap-1'>
                            <ReactStars
                                count={5}
                                size={16}
                                isHalf={true}
                                value={4}
                                emptyIcon={<BsStar />}
                                halfIcon={<BsStarHalf />}
                                fullIcon={<BsStarFill />}
                            //   edit={false}
                            />
                            <span className="text-gray-400">15</span>

                        </div>
                        <div className="w-4 h-4 mr-2">
                            <img
                                src="https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg"
                                alt=""
                                className="w-full h-full"
                            />

                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-500">
                        BurnHell - Weight Balance
                    </h3>
                    <p className="text-sm font-light text-gray-600">
                        This is a description of the product. You can add what ever you want
                    </p>
                    <div className="mt-4">
                        <hr />
                    </div>
                    <div>
                        <span className="flex gap-2 items-center">
                            <s className="text-gray-400 font-light">₹600</s>
                            <strong>₹320</strong>
                        </span>
                        <p className="text-gray-400 font-light">Month Pack - 30 Capsules</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NutritionCard;



// import React from 'react';
// import ReactStars from "react-rating-stars-component";
// import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

// const NutritionCard = (props) => {
//     return (
//         <div className="w-full p-4 md:w-1/2 lg:w-1/3">
//             <div className="w-full h-full bg-white rounded-2xl shadow-md">
//                 <div className={`w-full p-4 h-72 md:h-56 lg:h-48 rounded-t-2xl bg-${props.bg}-100`}>
//                     <img
//                         src={props.image}
//                         alt="Supplements"
//                         className="w-full h-full object-cover rounded-lg"
//                     />
//                 </div>
//                 <div className="p-3 flex flex-col gap-2">
//                     <div className="flex mt-2 items-center justify-between">
//                         <div className='flex flex-row gap-1 items-center'>
//                             <ReactStars
//                                 count={5}
//                                 size={16}
//                                 isHalf={true}
//                                 value={4}
//                                 emptyIcon={<BsStar />}
//                                 halfIcon={<BsStarHalf />}
//                                 fullIcon={<BsStarFill />}
//                                 edit={false}
//                             />
//                             <span className="text-gray-400">15</span>
//                         </div>
//                         <div className="w-4 h-4 mr-2">
//                             <img
//                                 src="https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg"
//                                 alt="Brand Logo"
//                                 className="w-full h-full"
//                             />
//                         </div>
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-500">
//                         BurnHell - Weight Balance
//                     </h3>
//                     <p className="text-sm font-light text-gray-600">
//                         This is a description of the product. You can add whatever you want.
//                     </p>
//                     <div className="mt-4">
//                         <hr />
//                     </div>
//                     <div>
//                         <span className="flex gap-2 items-center">
//                             <s className="text-gray-400 font-light">₹600</s>
//                             <strong>₹320</strong>
//                         </span>
//                         <p className="text-gray-400 font-light">Month Pack - 30 Capsules</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NutritionCard;

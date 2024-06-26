import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";

//redux call
import { useDispatch } from "react-redux";
import { signIn } from '../../Redux/Reducers/auth/auth.action'
import { getMySelf } from "../../Redux/Reducers/user/user.action";

const Signin = ({ isOpen, setIsOpen }) => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    //redux dipatch
    const dispatch = useDispatch()
    const submit = async () => {
        await dispatch(signIn(userData));
        await dispatch(getMySelf());
        closeModal();
        setUserData({ email: "", password: "" });
    };

    const googleSignIn = () => (window.location.href = `http://localhost:8080/auth/google`);

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    ></Dialog.Title>
                                    <div className="mt-2 flex flex-col gap-3 w-full">


                                        <form className="flex flex-col gap-2">

                                            <div className="w-full flex flex-col gap-2">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    value={userData.email}
                                                    onChange={handleChange}
                                                    placeholder="user@email.com"
                                                    className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                                                />
                                            </div>

                                            <div className="w-full flex flex-col gap-2">
                                                <label htmlFor="email">Password</label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    value={userData.password}
                                                    onChange={handleChange}
                                                    placeholder="*********"
                                                    className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                                                />
                                            </div>

                                            <div
                                                className="w-full text-center bg-zomato-400 text-black px-2 rounded-lg py-2 cursor-pointer"
                                                onClick={submit}
                                            >
                                                Sign In
                                            </div>


                                        </form>
                                        <h5 className="text-sm text-center">or</h5>
                                        <button
                                            className="py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100"
                                            onClick={googleSignIn}
                                        >
                                            Sign In With Google <FcGoogle />
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Signin;






// import React, { useState } from 'react';
// import { Transition, Dialog } from '@headlessui/react';
// import { FcGoogle } from 'react-icons/fc';
// import { useDispatch } from 'react-redux';
// import { signIn } from '../../Redux/Reducers/auth/auth.action';
// import { getMySelf } from '../../Redux/Reducers/user/user.action';

// const Signin = ({ isOpen, setIsOpen }) => {
//     const [userData, setUserData] = useState({
//         email: '',
//         password: '',
//     });

//     const dispatch = useDispatch();

//     const handleChange = (e) => {
//         setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//     };

//     const closeModal = () => {
//         setIsOpen(false);
//         setUserData({ email: '', password: '' }); // Clear form fields on close
//     };

//     const submit = async () => {
//         try {
//             await dispatch(signIn(userData)); // Dispatch sign in action
//             await dispatch(getMySelf()); // Fetch user profile
//             closeModal(); // Close the dialog
//         } catch (error) {
//             console.error('Sign in error:', error);
//             // Handle sign in error (show message to user)
//         }
//     };

//     const googleSignIn = () => {
//         window.location.href = 'http://localhost:8080/auth/google'; // Redirect to Google OAuth
//     };

//     return (
//         <>
//             <Transition appear show={isOpen} as={React.Fragment}>
//                 <Dialog as="div" className="relative z-10" onClose={closeModal}>
//                     <Transition.Child
//                         as={React.Fragment}
//                         enter="ease-out duration-300"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="ease-in duration-200"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                     >
//                         <div className="fixed inset-0 bg-black bg-opacity-25" />
//                     </Transition.Child>

//                     <Transition.Child
//                         as={React.Fragment}
//                         enter="ease-out duration-300"
//                         enterFrom="opacity-0 scale-95"
//                         enterTo="opacity-100 scale-100"
//                         leave="ease-in duration-200"
//                         leaveFrom="opacity-100 scale-100"
//                         leaveTo="opacity-0 scale-95"
//                     >
//                         <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                             <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
//                                 Sign In
//                             </Dialog.Title>
//                             <div className="mt-2 flex flex-col gap-3 w-full">
//                                 <form className="flex flex-col gap-2">
//                                     <div className="w-full flex flex-col gap-2">
//                                         <label htmlFor="email">Email</label>
//                                         <input
//                                             type="email"
//                                             id="email"
//                                             value={userData.email}
//                                             onChange={handleChange}
//                                             placeholder="Email"
//                                             className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
//                                             required
//                                         />
//                                     </div>
//                                     <div className="w-full flex flex-col gap-2">
//                                         <label htmlFor="password">Password</label>
//                                         <input
//                                             type="password"
//                                             id="password"
//                                             value={userData.password}
//                                             onChange={handleChange}
//                                             placeholder="*********"
//                                             className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
//                                             required
//                                         />
//                                     </div>
//                                     <div
//                                         className="w-full text-center bg-zomato-400 text-white px-2 rounded-lg py-2 cursor-pointer"
//                                         onClick={submit}
//                                     >
//                                         Sign In
//                                     </div>
//                                 </form>
//                                 <h5 className="text-sm text-center">or</h5>
//                                 <button
//                                     className="py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100"
//                                     onClick={googleSignIn}
//                                 >
//                                     Sign In With Google <FcGoogle />
//                                 </button>
//                             </div>
//                         </Dialog.Panel>
//                     </Transition.Child>
//                 </Dialog>
//             </Transition>
//         </>
//     );
// };

// export default Signin;

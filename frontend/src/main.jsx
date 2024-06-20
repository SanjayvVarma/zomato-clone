// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';
// import { Provider } from 'react-redux';
// import setupStore from './Redux/store';



// if (localStorage.zomatoUser) {
//   const { token } = JSON.parse(localStorage.zomatoUser);
//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// }

// const renderApp = async () => {
//   const store = await setupStore();

//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </Provider>
//     </React.StrictMode>,
//   )
// };
// renderApp();




import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import setupStore from './Redux/store';

if (localStorage.zomatoUser) {
    const { token } = JSON.parse(localStorage.zomatoUser);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);

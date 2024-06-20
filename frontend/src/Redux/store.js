// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './Reducers/rootReducer';

// const getMiddlewares = async () => {
//     const middlewares = [];

//     if (process.env.NODE_ENV === 'development') {
//         const { default: logger } = await import('redux-logger');
//         middlewares.push(logger);
//     }

//     return middlewares;
// };

// const configureAppStore = async () => {
//     const middlewares = await getMiddlewares();

//     const store = configureStore({
//         reducer: rootReducer,
//         middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
//     });

//     return store;
// };

// export default configureAppStore;

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers/rootReducer.js';

const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
};

export default setupStore;

// // AuthContext.jsx
// import React, { createContext, useEffect, useReducer, useContext } from 'react';

// // Define your initial state and reducer function
// export const authReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return { user: action.payload };

//     case 'LOGOUT':
//       return { user: null };

//     default:
//       return state;
//   }
// };

// // Create the context
// export const AuthContext = createContext();

// // Create the context provider
// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, {
//     user: null,
//   });

//   useEffect(() => {
//     // Fetch user data from localStorage on component mount
//     const user = JSON.parse(localStorage.getItem('profile'));

//     if (user) {
//       dispatch({ type: 'LOGIN', payload: user });
//     }
//   }, []);

//   // Provide the context value to the children components
//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Create a custom hook to consume the AuthContext
// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };



// AuthContext.jsx
import React, { createContext, useEffect, useReducer, useContext } from 'react';

// Define your initial state and reducer function
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };

    case 'LOGOUT':
      return { user: null };

    default:
      return state;
  }
};

// Create the context
export const AuthContext = createContext();

// Create the context provider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    // Fetch user data from localStorage on component mount
    const user = JSON.parse(localStorage.getItem('profile'));

    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, []);

  // Provide the context value to the children components
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to consume the AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};

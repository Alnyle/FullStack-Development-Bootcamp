// useContext() = React Hook that allow you to share values
//                between multiple levels of components
//                without passing through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'React'
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//      <Child/>
//    </MyContext.Provider>


// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//    import { MyContext } from './ComponentA'
// 2. const value = useContext(MyContext)


import React, {useState, useEffect, useRef} from 'react';
import ComponentA from './Components/ComponentA';

const App = () => {
  return (<ComponentA/>)
}

export default App